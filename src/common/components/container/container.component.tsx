import { FC, PropsWithChildren } from 'react'

export const Container: FC<PropsWithChildren> = ({ children }) => {
	const containerClasses = 'max-w-5xl mx-auto'
	return <div className={containerClasses}>{children}</div>
}
