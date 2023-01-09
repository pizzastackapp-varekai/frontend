import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CartSidebar } from './cart-sidebar.component'

export default {
	title: 'Cart/Cart sidebar',
	component: CartSidebar,
} as ComponentMeta<typeof CartSidebar>

const Template: ComponentStory<typeof CartSidebar> = args => {
	return <CartSidebar {...args} />
}

export const View = Template.bind({})
View.args = {
	items: [
		{
			image: 'menu/menu-1668466411',
			title: 'Піца барбекю',
			count: 2,
			price: 250,
		},
		{
			image: 'menu/menu-1668466411',
			title: 'Піца барбекю',
			count: 3,
			price: 148,
		},
		{
			image: 'menu/menu-1668466411',
			title: 'Піца барбекю',
			count: 1,
			price: 100,
		},
	],
}
