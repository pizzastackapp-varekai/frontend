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
View.args = {}
