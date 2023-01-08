import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from './header.component'

export default {
	title: 'Common/Header',
	component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => {
	return (
		<MemoryRouter>
			<Header {...args} />
		</MemoryRouter>
	)
}

export const View = Template.bind({})
View.args = {
	categories: [
		{
			id: 'a9900353-096a-41f1-a360-6ae55000961e',
			slug: 'pizza',
			title: 'Піца',
		},
		{
			id: 'b7308596-bc63-4e23-abf1-7d0853c93fe9',
			slug: 'drinks',
			title: 'Напої',
		},
	],
}

export const Loading = Template.bind({})

Loading.args = {
	isLoading: true,
}
