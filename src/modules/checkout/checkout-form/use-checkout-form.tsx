import * as yup from 'yup'
import { phoneRegex } from '@app/common/utils/regex'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import {
	CheckoutFormValues,
	UseCheckoutFormOptions,
} from './checkout-form.types'
import { Payment_Types_Enum } from '@app/core/types'
import { toast } from 'react-toastify'
const validation = yup.object({
	name: yup.string().required('Поле обовʼязкове'),
	phoneNumber: yup
		.string()
		.trim()
		.matches(phoneRegex, 'Введіть коректний номер телефону')
		.required('Введіть телефонний номер'),
	address: yup.string().required('Поле обовʼязкове'),
	comment: yup.string().notRequired(),
	paymentType: yup
		.string()
		.oneOf([Payment_Types_Enum.Cash, Payment_Types_Enum.Card]),
})

export const useCheckoutForm = (options?: UseCheckoutFormOptions) => {
	const { control, handleSubmit, reset } = useForm<CheckoutFormValues>({
		resolver: yupResolver(validation),
		defaultValues: {
			name: '',
			address: '',
			phoneNumber: '',
			paymentType: Payment_Types_Enum.Cash,
			comment: '',
		},
	})

	const submitForm = async (values: CheckoutFormValues) => {
		if (options?.callback) {
			try {
				await options.callback(values)
				toast.success('Замовлення створено')
			} catch (e) {
				toast.error((e as Error).message)
			}
		}
	}
	const onSubmit = handleSubmit(submitForm)

	return { control, onSubmit, reset }
}
