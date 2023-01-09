import clsx from 'clsx'
import { InputNumberSize } from './input-number.types'

export const useInputNumberClasses = (
	isFocused: boolean,
	size?: keyof typeof InputNumberSize,
	error?: string,
	fullWidth?: boolean
) => {
	const inputClasses = clsx(
		'border shadow-sm bg-white rounded-md  text-sm placeholder-gray-400 mb-2 outline-none transition-all ',
		{
			'py-0.5 pl-15 pr-20': size === InputNumberSize.m,
			'py-2 pl-9 pr-14': size === InputNumberSize.s,
			'border-gray-300': !error,
			'border-red-300 focus:border-red-500 text-red-900': error,
			'w-full': fullWidth,
		}
	)

	const commonButtonClasses = {
		'absolute top-px transition-all': true,
		'h-6 w-6': size === InputNumberSize.m,
		'h-9 w-9': size === InputNumberSize.s,
		'border-gray-300': !error,
		'border-red-300': error && !isFocused,
		'border-red-500': error && isFocused,
	}

	const buttonMinusClasses = clsx('border-r', commonButtonClasses)
	const buttonPlusClasses = clsx('border-l right-0', commonButtonClasses)

	const buttonIconsClasses = clsx('mx-auto transition-all', {
		'w-3 h-3': size === InputNumberSize.m,
		'child-path:stroke-gray-400': !error && !isFocused,
		'child-path:stroke-red-400': error && !isFocused,
		'child-path:stroke-red-500': error && isFocused,
	})

	const inputWrapperClasses = clsx('relative inline-block', {
		'w-full': fullWidth,
	})

	const errorMarkClasses = clsx('h-4 w-4 absolute fill-red-600', {
		'top-1.5 right-8': size === InputNumberSize.m,
		'top-2.75 right-12': size === InputNumberSize.s,
	})

	return {
		inputClasses,
		buttonMinusClasses,
		buttonPlusClasses,
		buttonIconsClasses,
		inputWrapperClasses,
		errorMarkClasses,
	}
}
