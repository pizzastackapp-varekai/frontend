import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuCategory } from './menu-category.component'

export default {
	title: 'Menu/Menu Category',
	component: MenuCategory,
} as ComponentMeta<typeof MenuCategory>

const Template: ComponentStory<typeof MenuCategory> = args => (
	<div className="flex">
		<MenuCategory {...args} />
	</div>
)

export const View = Template.bind({})

View.args = {
	data: {
		id: 'a9900353-096a-41f1-a360-6ae55000961e',
		slug: 'pizza',
		title: 'Піца',
		menu_items: [
			{
				id: '2cb855af-2637-45cc-856f-3ce8932c5acf',
				image: 'menu/menu-1668466329',
				ingredients: 'Шинка, Гриби, Моцарела, Соус PizzaStack',
				price: 215,
				title: 'Піца Шинка та гриби',
				weight: 555,
				category_id: 1,
			},
			{
				id: '19050f7a-5bb6-4696-9f3f-b40547aa76ca',
				image: 'menu/menu-1668466411',
				ingredients: 'Курка, Цибуля, Бекон, Гриби, Моцарела, Соус Барбекю',
				price: 215,
				title: 'Піца Барбекю',
				weight: 555,
				category_id: 1,
			},
			{
				id: '10c5f881-8ae3-4cf0-ba24-9b93eb8bba43',
				image: 'menu/menu-1668466403',
				ingredients:
					'Курка, Фрикадельки, Цибуля, Бекон, Болгарський перець, Моцарела, Соус Барбекю',
				price: 250,
				title: 'Піца Гриль Мікс',
				weight: 572,
				category_id: 1,
			},
			{
				id: '2fdad368-5dda-4210-88bc-4d42e5a71713',
				image: 'menu/menu-1668466394',
				ingredients: 'Цибуля, Бекон, Шинка, Гриби, Моцарела, Соус Альфредо',
				price: 250,
				title: 'Піца Карбонара',
				weight: 540,
				category_id: 1,
			},
			{
				id: '2fea7e31-fa79-4756-9ada-a72c02a3cb4a',
				image: 'menu/menu-1668466379',
				ingredients: '(подвійна порція моцарели), Моцарела, Соус PizzaStack',
				price: 215,
				title: 'Піца Маргаріта',
				weight: 555,
				category_id: 1,
			},
			{
				id: '98a902fe-084b-4e19-af2f-6e05f253712a',
				image: 'menu/menu-1668466344',
				ingredients:
					'Кукурудза, Цибуля, Гриби, Ковбаски баварські, Моцарела, Соус Барбекю',
				price: 215,
				title: 'Піца Техас',
				weight: 555,
				category_id: 1,
			},
			{
				id: '492c400d-a209-4aa3-8be9-ddee427394ad',
				image: 'menu/menu-1668466358',
				ingredients: 'Моцарела, Пепероні, Помідори, Соус Барбекю',
				price: 215,
				title: 'Піца Пепероні з томатами',
				weight: 555,
				category_id: 1,
			},
			{
				id: '9db31454-8130-44b1-bef4-7c37d07f280f',
				image: 'menu/menu-1668466369',
				ingredients: 'Моцарела, Пепероні, Соус PizzaStack',
				price: 215,
				title: 'Піца Пепероні',
				weight: 555,
				category_id: 1,
			},
			{
				id: 'ba929a69-a5d3-4ed6-9b56-2d4cf89c6740',
				image: 'menu/menu-1668466386',
				ingredients:
					'(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо',
				price: 215,
				title: 'Піца Мангеттен',
				weight: 555,
				category_id: 1,
			},
		],
	},
}
