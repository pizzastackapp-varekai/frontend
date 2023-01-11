import { Menu, useGetSettingsQuery } from '@app/core/types'
import { FC } from 'react'

import { MenuItem } from '../menu-item/menu-item.component'

interface MenuListProps {
	items: Menu[]
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
	const { data: settings } = useGetSettingsQuery({ fetchPolicy: 'cache-only' })
	return (
		<div className="flex flex-wrap gap-10 justify-center">
			{items.map(({ image, ...pizza }) => (
				<MenuItem
					{...pizza}
					pizzaId={pizza.id}
					image={image}
					key={`pizza-${pizza.id}`}
					fitImage={pizza.category_id === settings?.settings[0].drinks_category}
				/>
			))}
		</div>
	)
}
