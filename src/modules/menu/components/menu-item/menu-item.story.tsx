import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuItem } from './menu-item.component'

export default {
	title: 'Menu/Menu Item',
	component: MenuItem,
} as ComponentMeta<typeof MenuItem>

const Template: ComponentStory<typeof MenuItem> = args => <MenuItem {...args} />

export const General = Template.bind({})
General.args = {
	image: 'menu/menu-1668466379',
	weight: 555,
	title: 'Піца Мангеттен',
	ingredients:
		'(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо',
	price: 215,
}

export const Drink = Template.bind({})
Drink.args = {
	image: 'menu/menu-1669556344',
	price: 400,
	title: 'Cola',
	ingredients: null,
	fitImage: true,
}
