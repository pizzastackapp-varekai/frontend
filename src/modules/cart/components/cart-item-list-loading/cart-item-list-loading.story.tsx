import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CartItemListLoading } from './cart-item-list-loading.component'

export default {
	title: 'Cart/Cart item list loading',
	component: CartItemListLoading,
} as ComponentMeta<typeof CartItemListLoading>

const Template: ComponentStory<typeof CartItemListLoading> = () => {
	return <CartItemListLoading />
}

export const View = Template.bind({})
View.args = {}
