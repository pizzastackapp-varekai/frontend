import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CartItemLoading } from './cart-item-loading.component'

export default {
	title: 'Cart/Cart item loading',
	component: CartItemLoading,
} as ComponentMeta<typeof CartItemLoading>

const Template: ComponentStory<typeof CartItemLoading> = args => {
	return <CartItemLoading {...args} />
}

export const View = Template.bind({})
View.args = {}
