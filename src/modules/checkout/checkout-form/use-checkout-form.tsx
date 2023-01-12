import * as yup from 'yup'
import { phoneRegex } from '@app/common/utils/regex'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import {
	CheckoutFormValues,
	UseCheckoutFormOptions,
} from './checkout-form.types'
const validation = yup.object({
	name: yup.string().required('Поле обовʼязкове'),
	phoneNumber: yup
		.string()
		.trim()
		.matches(phoneRegex, 'Введіть коректний номер телефону')
		.required('Введіть телефонний номер'),
	address: yup.string().required('Поле обовʼязкове'),
	comment: yup.string().notRequired(),
	paymentType: yup.string().oneOf(['card', 'cash']),
})

export const useCheckoutForm = (options?: UseCheckoutFormOptions) => {
	const { control, handleSubmit } = useForm<CheckoutFormValues>({
		resolver: yupResolver(validation),
		defaultValues: {
			name: '',
			address: '',
			phoneNumber: '',
			paymentType: 'cash',
			comment: '',
		},
	})

	const submitForm = async (values: CheckoutFormValues) => {
		if (options?.callback) {
			await options.callback(values)
		}
	}
	const onSubmit = handleSubmit(submitForm)

	return { control, onSubmit }
}
