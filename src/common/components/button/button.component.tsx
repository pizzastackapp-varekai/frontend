import clsx from 'clsx'
import { ComponentProps, FC, PropsWithChildren } from 'react'

enum ButtonSize {
	sm = 'sm',
	base = 'base',
}

enum ButtonVariant {
	primary = 'primary',
	danger = 'danger',
}

interface ButtonProps {
	size?: keyof typeof ButtonSize
	disabled?: boolean
	variant?: keyof typeof ButtonVariant
	type?: ComponentProps<'button'>['type']
	onClick?: ComponentProps<'button'>['onClick']
	fullWidth?: boolean
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	size = ButtonSize.base,
	disabled,
	variant = ButtonVariant.primary,
	fullWidth = false,
	...props
}) => {
	const ButtonClasses = clsx(
		'text-sm text-gray-900 px-4 transition-all rounded-md',
		{
			'w-full': fullWidth,
			'py-2': size === ButtonSize.base,
			'py-0.5': size === ButtonSize.sm,
			'opacity-50 cursor-not-allowed': disabled,
			'bg-amber-400 border-amber-400 disabled:hover:bg-amber-400 disabled:hover:border-amber-400 hover:bg-amber-500':
				variant === ButtonVariant.primary,
			'bg-red-400 border-red-400 disabled:hover:bg-red-400 disabled:hover:border-red-400 hover:bg-red-500':
				variant === ButtonVariant.danger,
		}
	)
	return (
		<div>
			<button className={ButtonClasses} disabled={disabled} {...props}>
				{children}
			</button>
		</div>
	)
}
