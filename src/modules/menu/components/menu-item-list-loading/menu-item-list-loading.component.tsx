import { FC } from 'react'
import { MenuItemLoading } from '../menu-item-loading/menu-item-loading.component'

interface MenuItemListLoadingProps {
	items: number
}

export const MenuItemListLoading: FC<MenuItemListLoadingProps> = ({
	items,
}) => {
	return (
		<div className="flex flex-wrap gap-10 justify-center">
			{new Array(items).fill(1).map((v, index) => {
				return <MenuItemLoading key={`menu-loading-${index}`} />
			})}
		</div>
	)
}
