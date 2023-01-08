import { ActionPaperFooter } from '@app/common/components/action-paper-footer/action-paper-footer.component'
import { ActionPaper } from '@app/common/components/action-paper/action-paper.component'
import { Button } from '@app/common/components/button/button.component'
import { Input } from '@app/common/components/input/input.component'
import { FC, useEffect } from 'react'
import { Controller } from 'react-hook-form'
import { UpdateInfoProps } from './update-info.types'
import { UseUpdateInfoForm } from './use-update-info-form'

export const UpdateInfo: FC<UpdateInfoProps> = ({
	initialValues,
	onSubmitCallback,
	isUpdating,
}) => {
	const { isSubmitting, onSubmit, control, reset } = UseUpdateInfoForm(
		initialValues,
		onSubmitCallback
	)

	useEffect(() => {
		if (!isUpdating) {
			reset({
				name: initialValues?.name ?? '',
				address: initialValues?.address ?? '',
			})
		}
	}, [initialValues, isUpdating])

	const actionPaperFooter = (
		<ActionPaperFooter>
			<Button type="submit" disabled={isSubmitting} onClick={onSubmit}>
				Зберегти
			</Button>
		</ActionPaperFooter>
	)

	return (
		<ActionPaper title="Персональні дані" footer={actionPaperFooter}>
			<form className="flex gap-9" onSubmit={onSubmit}>
				<div className="w-1/2">
					<Controller
						control={control}
						name="phoneNumber"
						render={({ field, fieldState }) => (
							<Input
								{...field}
								error={fieldState.error?.message}
								label="Телефон"
								placeholder="Введіть телефон"
								fullWidth
								disabled
							/>
						)}
					/>
					<Controller
						control={control}
						name="address"
						render={({ field, fieldState }) => (
							<Input
								{...field}
								error={fieldState.error?.message}
								label="Адреса"
								placeholder="Введіть адресу"
								fullWidth
							/>
						)}
					/>
				</div>
				<div className="w-1/2">
					<Controller
						control={control}
						name="name"
						render={({ field, fieldState }) => (
							<Input
								{...field}
								error={fieldState.error?.message}
								label="Імʼя"
								placeholder="Введіть імʼя"
								fullWidth
							/>
						)}
					/>
				</div>
			</form>
		</ActionPaper>
	)
}
