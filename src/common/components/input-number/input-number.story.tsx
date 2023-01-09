import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputNumber } from './input-number.component'

export default {
	title: 'Form/Input number',
	component: InputNumber,
} as ComponentMeta<typeof InputNumber>

const Template: ComponentStory<typeof InputNumber> = args => (
	<InputNumber {...args} />
)

export const View = Template.bind({})

View.args = {}
