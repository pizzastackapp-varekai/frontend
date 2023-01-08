import { Button } from '@app/common/components/button/button.component'
import { Input } from '@app/common/components/input/input.component'
import { FC, useState } from 'react'
import { Controller } from 'react-hook-form'

import { Counter } from '@app/common/components/counter/counter.component'

import { toast } from 'react-toastify'
import {
	LoginFormProps,
	LoginFormStep,
	LoginFormStepKeys,
} from './login-form.types'
import { useLoginForm } from './use-login-form'

export const LoginForm: FC<LoginFormProps> = ({
	onFirstStepCallback,
	onSecondStepCallback,
}) => {
	const [step, setStep] = useState<LoginFormStepKeys>(LoginFormStep.first)

	const { getValues, onSubmit, control, isSubmitting } = useLoginForm(
		step,
		setStep,
		onFirstStepCallback,
		onSecondStepCallback
	)

	const OnResend = async () => {
		const phoneNumber = getValues('phoneNumber')
		if (onFirstStepCallback) {
			try {
				await onFirstStepCallback(phoneNumber)
			} catch (error) {
				toast.error((error as Error).message)
			}
		}
	}
	return (
		<div className="w-112 py-8 px-10 bg-white rounded-lg border border-gray-300 shadow mx-auto">
			<form onSubmit={onSubmit}>
				<div className="flex gap-2 flex-col">
					<Controller
						control={control}
						name="phoneNumber"
						render={({ field, fieldState }) => (
							<Input
								disabled={step === LoginFormStep.second}
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
						<Button type="submit" disabled={isSubmitting}>
							{step === LoginFormStep.first ? 'Отримати код' : ' Увійти'}
						</Button>
					</div>
					<div>
						{step === LoginFormStep.second && (
							<Counter intervalTime={60} onRestart={OnResend}>
								Відправити код ще раз
							</Counter>
						)}
					</div>
				</div>
			</form>
		</div>
	)
}
