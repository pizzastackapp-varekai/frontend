import { FC, PropsWithChildren } from 'react'

interface HeaderCategoryLinkProps {
	url: string
}

export const HeaderCategoryLink: FC<
	PropsWithChildren<HeaderCategoryLinkProps>
> = ({ url, children }) => {
	return (
		<a
			href={url}
			className="font-semibold relative hover:after:content-[''] after:block after:absolute hover:after:w-full hover:after:h-px hover:after:bg-amber-400"
		>
			{children}
		</a>
	)
}
