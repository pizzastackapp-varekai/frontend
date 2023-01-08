import { min3Symbols, phoneRegex } from '@app/common/utils/regex'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { UpdateInfoFormValues } from './update-info.types'
import * as yup from 'yup'

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

export const UseUpdateInfoForm = () => {
	const {
		control,
		formState: { isSubmitting },
		handleSubmit,
	} = useForm<UpdateInfoFormValues>({
		resolver: yupResolver(validationSchema),
	})

	const submitForm = (values: UpdateInfoFormValues) => {
		alert(JSON.stringify(values))
	}

	const onSubmit = handleSubmit(submitForm)
	return {
		control,
		isSubmitting,
		onSubmit,
	}
}
