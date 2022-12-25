import { ShowInfo } from '@app/common/components/show-info/show-info.component'
import { useGetMenuQuery, useGetSettingsQuery } from '@app/core/types'
import { MenuCategory } from '../components/menu-category/menu-category.component'
import { MenuItemListLoading } from '../components/menu-item-list-loading/menu-item-list-loading.component'

export const MenuPage = () => {
	const { data, loading, error } = useGetMenuQuery()
	const { loading: loadingSettings } = useGetSettingsQuery()
	if (error) {
		return (
			<ShowInfo type="error">
				<p>Упс, сталася помилка 😢</p>
				<p>Спробуйте трохи пізніше</p>
			</ShowInfo>
		)
	}
	if (loading || loadingSettings) {
		return <MenuItemListLoading items={9} />
	}
	if (!data) {
		return (
			<ShowInfo type="info">
				<p>Нажаль, меню пусте нухз 🤷</p>
			</ShowInfo>
		)
	}

	return (
		<div className="flex flex-col gap-12">
			{data.categories.map(category => (
				<MenuCategory data={category} key={category.id} />
			))}
		</div>
	)
}
