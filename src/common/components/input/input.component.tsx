import clsx from 'clsx'
import { ComponentProps, forwardRef, useId } from 'react'
import { ReactComponent as ExclamationCircleSolid } from '@app/assets/icons/exclamation-circle-solid.svg'

interface InputProps {
	onChange?: ComponentProps<'input'>['onChange']
	onBlur?: ComponentProps<'input'>['onBlur']
	value?: ComponentProps<'input'>['value']
	name?: ComponentProps<'input'>['name']
	disabled?: ComponentProps<'input'>['disabled']
	label: string
	placeholder: string
	error?: string
	fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, error, fullWidth, ...props }, ref) => {
		const inputId = useId()

		const inputClasses = clsx(
			'border shadow-sm bg-white rounded-md pl-3 pr-8 py-2 text-sm placeholder-gray-400 mb-2 outline-none transition-all disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
			{
				'border-gray-300': !error,
				'border-red-300 focus:border-red-500 text-red-900': error,
				'w-full': fullWidth,
			}
		)

		const inputWrapperClasses = clsx('relative inline-block', {
			'w-full': fullWidth,
		})
		return (
			<div>
				<label
					htmlFor={inputId}
					className="block text-sm font-medium text-gray-900 mb-1"
				>
					{label}
				</label>
				<div className={inputWrapperClasses}>
					<input id={inputId} className={inputClasses} ref={ref} {...props} />
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
)
