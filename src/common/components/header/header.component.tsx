import { Categories } from '@app/core/types'
import { UserDropdown } from '@app/modules/auth/components/user-dropdown/user-dropdown.component'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button/button.component'

import { HeaderCategoryLink } from '../link/link.component'
import { Skeleton } from '../skeleton/skeleton.component'
interface HeaderProps {
	isLoading?: boolean
	categories?: Omit<Categories, 'menu_items' | 'menu_items_aggregate'>[]
	isLoggedin?: boolean
}

export const Header: FC<HeaderProps> = ({
	isLoading,
	categories,
	isLoggedin,
}) => {
	return (
		<div className="h-12 shadow px-6 mb-8 fixed w-full z-10 bg-white flex justify-between items-center">
			<div className="flex items-center h-full gap-3">
				<a href="/" className="text-xl font-semibold">
					🍕 Pizza Stack
				</a>
				<div className="h-6 w-px bg-gray-200"></div>
				{isLoading ? (
					<>
						<Skeleton width={34} height={19} />
						<Skeleton width={34} height={19} />
						<Skeleton width={34} height={19} />
						<Skeleton width={34} height={19} />
					</>
				) : (
					<>
						{categories?.map(category => (
							<HeaderCategoryLink url={`#${category.slug}`} key={category.id}>
								{category.title}
							</HeaderCategoryLink>
						))}
					</>
				)}
			</div>
			<div>
				{isLoggedin ? (
					<UserDropdown />
				) : (
					<Link to="/login">
						<Button size="sm">Війти</Button>
					</Link>
				)}
			</div>
		</div>
	)
}
