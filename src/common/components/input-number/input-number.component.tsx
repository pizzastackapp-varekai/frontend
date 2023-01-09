import { FocusEvent, forwardRef, useId, useState } from 'react'
import { ReactComponent as ExclamationCircleSolid } from '@app/assets/icons/exclamation-circle-solid.svg'
import { ReactComponent as Minus16Icon } from '@app/assets/icons/minus-16.svg'
import { ReactComponent as Plus16Icon } from '@app/assets/icons/plus-16.svg'
import { InputNumberProps, InputNumberSize } from './input-number.types'
import { useInputNumberClasses } from './use-input-number-classes'

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
	(
		{
			label,
			error,
			fullWidth,
			setValue,
			value,
			size = InputNumberSize.base,
			onBlur,
			hideErrorMessage = false,
			...props
		},
		ref
	) => {
		const inputId = useId()
		const [isFocused, setIsFocused] = useState(false)

		const {
			inputClasses,
			buttonMinusClasses,
			buttonPlusClasses,
			buttonIconsClasses,
			inputWrapperClasses,
			errorMarkClasses,
		} = useInputNumberClasses(
			isFocused,
			size,
			error,
			fullWidth,
			hideErrorMessage
		)
		const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
			setIsFocused(true)
		}

		const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
			setIsFocused(false)
			if (onBlur) {
				onBlur(event)
			}
		}

		const onHandleDecrement = () => {
			if (setValue && value) {
				setValue(value - 1)
			}
		}

		const onHandleIncrement = () => {
			if (setValue && value) {
				setValue(value + 1)
			}
		}

		return (
			<div>
				<label
					htmlFor={inputId}
					className="block text-sm font-medium text-gray-900 mb-1"
				>
					{label}
				</label>
				<div className={inputWrapperClasses}>
					<button className={buttonMinusClasses} onClick={onHandleDecrement}>
						<Minus16Icon className={buttonIconsClasses} />
					</button>
					<input
						id={inputId}
						className={inputClasses}
						ref={ref}
						onFocus={handleFocus}
						onBlur={handleBlur}
						value={value}
						{...props}
						type="number"
					/>

					{error && <ExclamationCircleSolid className={errorMarkClasses} />}
					<button className={buttonPlusClasses} onClick={onHandleIncrement}>
						<Plus16Icon className={buttonIconsClasses} />
					</button>
				</div>
				{!hideErrorMessage && (
					<span
						dangerouslySetInnerHTML={{ __html: error || '&nbsp;' }}
						className="text-sm text-red-600 block mt-2"
					/>
				)}
			</div>
		)
	}
)
