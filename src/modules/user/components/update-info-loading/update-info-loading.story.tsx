import { ComponentStory, ComponentMeta } from '@storybook/react'
import { UpdateInfoLoading } from './update-info-loading.component'

export default {
	title: 'User/Update info loading',
	component: UpdateInfoLoading,
} as ComponentMeta<typeof UpdateInfoLoading>

const Template: ComponentStory<typeof UpdateInfoLoading> = args => (
	<UpdateInfoLoading {...args} />
)

export const View = Template.bind({})
View.args = {}
