import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from './input.component'

export default {
	title: 'Form/Input',
	component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const View = Template.bind({})

View.args = {
	onChange: () => console.log('onChange'),
	onBlur: () => console.log('onBlur'),
	onFocus: () => console.log('onFocus'),
	label: 'Телефон',
	placeholder: 'Телефон',
}

export const ViewWithError = Template.bind({})
ViewWithError.args = {
	onChange: () => console.log('onChange'),
	onBlur: () => console.log('onBlur'),
	onFocus: () => console.log('onFocus'),
	label: 'Телефон',
	placeholder: 'Телефон',
	error: 'Введіть коректний номер телефону',
}
