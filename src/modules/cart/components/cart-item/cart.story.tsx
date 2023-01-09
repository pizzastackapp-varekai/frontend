import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CartItem } from './cart-item.component'

export default {
	title: 'Cart/Cart item',
	component: CartItem,
} as ComponentMeta<typeof CartItem>

const Template: ComponentStory<typeof CartItem> = args => {
	return <CartItem {...args} />
}

export const Pizza = Template.bind({})
Pizza.args = {
	image: 'menu/menu-1668466411',
	title: 'Піца барбекю',
	count: 2,
	price: 148,
}
export const Drink = Template.bind({})
Drink.args = {
	image: 'menu/menu-1669556249',
	title: 'Капучіно',
	count: 2,
	price: 100,
}
