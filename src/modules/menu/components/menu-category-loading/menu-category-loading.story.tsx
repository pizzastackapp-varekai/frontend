import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuCategoryLoading } from './menu-category-loading.component'

export default {
	title: 'Menu/Menu Category Loading',
	component: MenuCategoryLoading,
} as ComponentMeta<typeof MenuCategoryLoading>

const Template: ComponentStory<typeof MenuCategoryLoading> = () => (
	<div className="flex">
		<MenuCategoryLoading />
	</div>
)

export const View = Template.bind({})
