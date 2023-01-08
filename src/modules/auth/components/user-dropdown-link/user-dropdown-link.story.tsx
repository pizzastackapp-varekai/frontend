import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { UserDropdownLink } from './user-dropdown-link.component'

export default {
	title: 'Auth/User dropdown link',
	component: UserDropdownLink,
} as ComponentMeta<typeof UserDropdownLink>

const Template: ComponentStory<typeof UserDropdownLink> = args => (
	<BrowserRouter>
		<UserDropdownLink {...args} />
	</BrowserRouter>
)

export const View = Template.bind({})

View.args = {
	children: 'Ваш профіль',
}
