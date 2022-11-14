import { ShowInfo } from '@app/common/components/show-info/show-info.component'
import { useGetMenuQuery } from '@app/core/types'
import { MenuItemListLoading } from '../components/menu-item-list-loading/menu-item-list-loading.component'
import { MenuList } from '../components/menu-list/menu-list.component'

export const MenuPage = () => {
	const { data, loading, error } = useGetMenuQuery()
	if (error) {
		return (
			<ShowInfo type="error">
				<p>Упс, сталася помилка 😢</p>
				<p>Спробуйте трохи пізніше</p>
			</ShowInfo>
		)
	}
	if (loading) {
		return <MenuItemListLoading items={9} />
	}
	if (!data) {
		return (
			<ShowInfo type="info">
				<p>Нажаль, меню пусте нухз 🤷</p>
			</ShowInfo>
		)
	}

	return <MenuList items={data?.menu} />
}
