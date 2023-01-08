import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { UserDropdown } from './user-dropdown.component'

export default {
	title: 'Auth/User dropdown',
	component: UserDropdown,
} as ComponentMeta<typeof UserDropdown>

const Template: ComponentStory<typeof UserDropdown> = args => (
	<BrowserRouter>
		<div className="p-4 shadow flex justify-end">
			<UserDropdown {...args} />
		</div>
	</BrowserRouter>
)

export const View = Template.bind({})

View.args = {}
