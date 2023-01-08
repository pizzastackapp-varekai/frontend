import { Button } from '@app/common/components/button/button.component'
import { Input } from '@app/common/components/input/input.component'
import { FC, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Counter } from '@app/common/components/counter/counter.component'
import { phoneRegex } from '@app/common/utils/regex'

interface LoginFormProps {}

interface LoginFormValues {
	phoneNumber: string
	code: string
}

enum LoginFormStep {
	first = 'first',
	second = 'second',
}

type LoginFormStepKeys = keyof typeof LoginFormStep

const generateValidationSchema = (step: LoginFormStepKeys) => {
	const baseValidation = {
		phoneNumber: yup
			.string()
			.trim()
			.matches(phoneRegex, 'Введіть коректний номер телефону')
			.required('Введіть телефонний номер'),
	}
	if (step === LoginFormStep.first) {
		return yup.object(baseValidation)
	}
	return yup.object({
		...baseValidation,
		code: yup.string().trim().required('Введіть код з SMS'),
	})
}

export const LoginForm: FC<LoginFormProps> = () => {
	const [step, setStep] = useState<LoginFormStepKeys>(LoginFormStep.first)
	const { control, handleSubmit } = useForm<LoginFormValues>({
		resolver: yupResolver(generateValidationSchema(step)),
		defaultValues: {
			phoneNumber: '',
			code: '',
		},
	})

	const submitForm = (values: LoginFormValues) => {
		if (step === LoginFormStep.first) {
			setStep(LoginFormStep.second)
			return
		}

		console.log('values', values)
	}
	return (
		<div className="w-112 py-8 px-10 bg-white rounded-lg border border-gray-300 shadow mx-auto">
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="flex gap-2 flex-col">
					<Controller
						control={control}
						name="phoneNumber"
						render={({ field, fieldState }) => (
							<Input
								label="Teлефон"
								placeholder="+380671111111"
								fullWidth
								error={fieldState.error?.message}
								{...field}
							/>
						)}
					/>
					{step === LoginFormStep.second && (
						<Controller
							control={control}
							name="code"
							render={({ field, fieldState }) => (
								<Input
									label="Код"
									placeholder="Введіть код з SMS"
									fullWidth
									error={fieldState.error?.message}
									{...field}
								/>
							)}
						/>
					)}
					<div className="text-center">
						<Button type="submit">
							{step === LoginFormStep.first ? 'Отримати код' : ' Увійти'}
						</Button>
					</div>
					<div>
						{step === LoginFormStep.second && (
							<Counter onRestart={() => console.log('restart')}>
								Відправити код ще раз
							</Counter>
						)}
					</div>
				</div>
			</form>
		</div>
	)
}
