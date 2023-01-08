import {
	LoginFormStep,
	LoginFormStepKeys,
	LoginFormValues,
} from './login-form.types'
import * as yup from 'yup'
import { phoneRegex } from '@app/common/utils/regex'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { Dispatch, SetStateAction } from 'react'

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

export const useLoginForm = (
	step: LoginFormStepKeys,
	setStep: Dispatch<SetStateAction<keyof typeof LoginFormStep>>,
	firstStepCallback?: (phoneNumber: string) => Promise<void>,
	secondStepCallback?: (phoneNumber: string, code: string) => Promise<void>
) => {
	const {
		control,
		handleSubmit,
		getValues,
		formState: { isSubmitting },
	} = useForm<LoginFormValues>({
		resolver: yupResolver(generateValidationSchema(step)),
		defaultValues: {
			phoneNumber: '',
			code: '',
		},
	})
	const submitForm = async (values: LoginFormValues) => {
		try {
			if (step === LoginFormStep.first) {
				if (firstStepCallback !== undefined) {
					await firstStepCallback(values.phoneNumber)
				}
				setStep(LoginFormStep.second)
				return
			}
			if (secondStepCallback !== undefined) {
				await secondStepCallback(values.phoneNumber, values.code)
			}
		} catch (error) {
			toast.error((error as Error).message)
		}
	}

	const onSubmit = handleSubmit(submitForm)
	return {
		getValues,
		onSubmit,
		control,
		isSubmitting,
	}
}
