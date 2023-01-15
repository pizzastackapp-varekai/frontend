import { min3Symbols, phoneRegex } from '@app/common/utils/regex'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { UpdateInfoFormValues } from './update-info.types'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { FrontCustomer } from '../../types/user'

const validationSchema = yup.object({
	phoneNumber: yup
		.string()
		.trim()
		.matches(phoneRegex, 'Введіть коректний номер телефону')
		.required('Введіть телефонний номер'),
	name: yup.string().trim().matches(min3Symbols, {
		excludeEmptyString: true,
		message: 'Введіть мінімум 3 символа',
	}),
	address: yup.string().trim().matches(min3Symbols, {
		excludeEmptyString: true,
		message: 'Введіть мінімум 3 символа',
	}),
})

export const UseUpdateInfoForm = (
	initialValues?: FrontCustomer,
	onSubmitCallback?: (values: UpdateInfoFormValues) => Promise<void>
) => {
	const {
		control,
		formState: { isSubmitting },
		handleSubmit,
		reset,
	} = useForm<UpdateInfoFormValues>({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			phoneNumber: initialValues?.phone,
			name: initialValues?.name || '',
			address: initialValues?.address || '',
		},
	})

	const submitForm = async (values: UpdateInfoFormValues) => {
		if (onSubmitCallback) {
			try {
				await onSubmitCallback(values)
				toast.success('Дані оновлені')
			} catch (error) {
				toast.error((error as Error).message)
			}
		}
	}

	const onSubmit = handleSubmit(submitForm)
	return {
		control,
		isSubmitting,
		onSubmit,
		reset,
	}
}
