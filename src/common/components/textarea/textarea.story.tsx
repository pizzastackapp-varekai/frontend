import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Textarea } from './textarea.component'

export default {
	title: 'Form/Textarea',
	component: Textarea,
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = args => <Textarea {...args} />

export const View = Template.bind({})

View.args = {
	label: 'Деталі замовлення',
	placeholder: 'Введіть будь-яку корисну інформацію',
}
