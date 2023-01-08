import { FC, PropsWithChildren } from 'react'

interface ActionPaperProps {}

export const ActionPaperFooter: FC<PropsWithChildren<ActionPaperProps>> = ({
	children,
}) => {
	return (
		<div className="bg-gray-50 py-3 px-6 rounded-b-md flex justify-end">
			{children}
		</div>
	)
}
