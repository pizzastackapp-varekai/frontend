import { Header } from '@app/common/components/header/header.component'
import { Footer } from '@app/common/components/footer/footer.component'
import { MenuPage } from '@app/modules/menu/pages/menu.page'
import { useGetCategoriesQuery } from '@app/core/types'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '@app/modules/auth/pages/login.page'
import { isLoggedInReactive } from './modules/auth/store/reactive-vars'
import { useEffect } from 'react'
import { ProfilePage } from '@app/modules/user/pages/profile.page'
import { PrivateRoute } from './common/components/private-route/private-route.component'
import { CartSidebar } from './modules/cart/components/cart-sidebar/cart-sidebar.component'

export const App = () => {
	const { data, loading } = useGetCategoriesQuery()

	useEffect(() => {
		const token = localStorage.getItem('jwt')
		isLoggedInReactive(Boolean(token))
	}, [])

	return (
		<div className="flex flex-col min-h-screen justify-between">
			<Header isLoading={loading} categories={data?.categories} />
			<CartSidebar />
			<div className="mx-6 sm:mx-12 my-20 sm:my-24 ">
				<Routes>
					<Route path="/" element={<MenuPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route
						path="/profile"
						element={
							<PrivateRoute>
								<ProfilePage />
							</PrivateRoute>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	)
}
