import clsx from 'clsx'
import { ComponentProps, FC, useId } from 'react'
import { ReactComponent as ExclamationCircleSolid } from '@app/assets/icons/exclamation-circle-solid.svg'

interface InputProps {
	onChange: ComponentProps<'input'>['onChange']
	onBlur: ComponentProps<'input'>['onBlur']
	onFocus: ComponentProps<'input'>['onFocus']
	value: ComponentProps<'input'>['value']
	label: string
	placeholder: string
	error?: string
}

export const Input: FC<InputProps> = ({ label, error, ...props }) => {
	const inputId = useId()

	const inputClasses = clsx(
		'border shadow-sm bg-white rounded-md py-2 px-4 text-sm placeholder-gray-400 mb-2 outline-none transition-all ',
		{
			'border-gray-300': !error,
			'border-red-300 focus:border-red-500 text-red-900': error,
		}
	)
	return (
		<div>
			<label
				htmlFor={inputId}
				className="block text-sm font-medium text-gray-900 mb-1"
			>
				{label}
			</label>
			<div className="relative inline-block">
				<input id={inputId} className={inputClasses} {...props} />
				{error && (
					<ExclamationCircleSolid className="h-4 w-4 absolute top-2.75 right-3 fill-red-600" />
				)}
			</div>

			<span
				dangerouslySetInnerHTML={{ __html: error || '&nbsp;' }}
				className="text-sm text-red-600 block"
			/>
		</div>
	)
}
