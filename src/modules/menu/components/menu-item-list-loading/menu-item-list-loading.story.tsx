import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuItemListLoading } from './menu-item-list-loading.component'

export default {
	title: 'Menu/Menu Item List Loading',
	component: MenuItemListLoading,
} as ComponentMeta<typeof MenuItemListLoading>

const Template: ComponentStory<typeof MenuItemListLoading> = args => (
	<MenuItemListLoading {...args} />
)

export const View = Template.bind({})

View.args = {
	items: 3,
}
