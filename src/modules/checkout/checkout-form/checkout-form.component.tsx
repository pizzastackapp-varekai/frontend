import { Button } from '@app/common/components/button/button.component'
import { Input } from '@app/common/components/input/input.component'
import { RadioGroup } from '@app/common/components/radio-group/radio-group.component'
import { TextArea } from '@app/common/components/textarea/textarea.component'
import { Payment_Types_Enum } from '@app/core/types'
import { FC, useEffect } from 'react'

import { Controller } from 'react-hook-form'

import { CheckoutFormProps } from './checkout-form.types'
import { useCheckoutForm } from './use-checkout-form'

const paymentTypeOptions = [
	{ label: 'Готівка', value: Payment_Types_Enum.Cash },
	{ label: 'Картка', value: Payment_Types_Enum.Card },
]

export const CheckoutForm: FC<CheckoutFormProps> = ({
	submitCallback,
	initialValues,
}) => {
	const { control, onSubmit, reset } = useCheckoutForm({
		callback: submitCallback,
	})

	useEffect(() => {
		reset({
			name: initialValues?.name ?? '',
			address: initialValues?.address ?? '',
			phoneNumber: initialValues?.phone ?? '',
		})
	}, [initialValues])
	return (
		<form className="flex flex-col gap-2" onSubmit={onSubmit}>
			<Controller
				name="name"
				control={control}
				render={({ field, fieldState }) => (
					<Input
						{...field}
						fullWidth
						error={fieldState.error?.message}
						label="Ім'я"
						placeholder="Введіть ваше ім'я"
					/>
				)}
			/>
			<Controller
				name="phoneNumber"
				control={control}
				render={({ field, fieldState }) => (
					<Input
						{...field}
						fullWidth
						error={fieldState.error?.message}
						label="Телефон"
						placeholder="Введіть ваш телефон"
					/>
				)}
			/>
			<Controller
				name="address"
				control={control}
				render={({ field, fieldState }) => (
					<Input
						{...field}
						fullWidth
						error={fieldState.error?.message}
						label="Адреса"
						placeholder="Введіть вашу адресу"
					/>
				)}
			/>
			<Controller
				name="comment"
				control={control}
				render={({ field, fieldState }) => (
					<TextArea
						{...field}
						fullWidth
						error={fieldState.error?.message}
						label="Коментар"
						placeholder="Введіть ваш коментар"
					/>
				)}
			/>
			<Controller
				name="paymentType"
				control={control}
				render={({ field }) => (
					<RadioGroup
						{...field}
						options={paymentTypeOptions}
						label="Форма оплати"
					/>
				)}
			/>
			<Button type="submit" fullWidth>
				Підтвердити замовлення
			</Button>
		</form>
	)
}
