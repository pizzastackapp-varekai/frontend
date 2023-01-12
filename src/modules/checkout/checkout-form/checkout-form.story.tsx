import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CheckoutForm } from './checkout-form.component'

export default {
	title: 'Checkout/Checkout form',
	component: CheckoutForm,
} as ComponentMeta<typeof CheckoutForm>

const Template: ComponentStory<typeof CheckoutForm> = args => {
	return <CheckoutForm {...args} />
}

export const View = Template.bind({})
View.args = {}
