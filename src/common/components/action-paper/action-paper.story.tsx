import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ActionPaperFooter } from '../action-paper-footer/action-paper-footer.component'
import { ActionPaper } from './action-paper.component'

export default {
	title: 'Common/Action paper',
	component: ActionPaper,
} as ComponentMeta<typeof ActionPaper>

const Template: ComponentStory<typeof ActionPaper> = args => (
	<ActionPaper {...args} />
)

export const View = Template.bind({})
View.args = {
	children: 'Action paper',
	title: 'Персональні дані',
}

export const WithFooter = Template.bind({})

WithFooter.args = {
	children: 'Action paper',
	title: 'Персональні дані',
	footer: (
		<ActionPaperFooter>
			<button>123</button>
		</ActionPaperFooter>
	),
}
