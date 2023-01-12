import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextArea } from './textarea.component'

export default {
	title: 'Form/TextArea',
	component: TextArea,
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = args => <TextArea {...args} />

export const View = Template.bind({})

View.args = {
	label: 'Деталі замовлення',
	placeholder: 'Введіть будь-яку корисну інформацію',
}
