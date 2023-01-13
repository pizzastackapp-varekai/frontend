import { useReactiveVar } from '@apollo/client'
import { useGetMenuItemsForCartQuery } from '@app/core/types'
import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { cartState } from '../../store/cart-state'
import { CartItemListLoading } from '../cart-item-list-loading/cart-item-list-loading.component'
import { CartItem } from '../cart-item/cart-item.component'

enum CartSumItemPosition {
	top = 'top',
	bottom = 'bottom',
}

interface CartListProps {
	appendix?: ReactNode
	scrollDisabled?: boolean
	cartSumItemPosition?: keyof typeof CartSumItemPosition
}

export const CartList: FC<CartListProps> = ({
	appendix,
	scrollDisabled = false,
	cartSumItemPosition = CartSumItemPosition.bottom,
}) => {
	const cartItems = useReactiveVar(cartState)
	const { data, previousData, loading } = useGetMenuItemsForCartQuery({
		variables: {
			menuIds: Object.keys(cartItems),
		},
	})

	const cartSum =
		data?.menu.reduce((acc, val) => {
			return acc + val.price * cartItems[val.id]
		}, 0) ?? 0

	if (!data && !previousData && loading) {
		return <CartItemListLoading />
	}

	const wrapperClasses = clsx('flex gap-6 flex-col', {
		'h-[calc(100%_-_3.25rem)]': !scrollDisabled,
	})

	const listWrapperClasses = clsx('flex gap-6 flex-col', {
		'overflow-y-auto': !scrollDisabled,
	})

	const cartSumItemClasses = clsx(
		'text-right text-sm font-medium text-gray-900',
		{
			'border-t border-gray-200  pt-6':
				cartSumItemPosition === CartSumItemPosition.bottom,
		}
	)

	const cartSumItem = (
		<div className={cartSumItemClasses}>Усього: {cartSum} грн</div>
	)

	return (
		<div className={wrapperClasses}>
			{cartSumItemPosition === CartSumItemPosition.top && cartSumItem}
			<div className={listWrapperClasses}>
				{(data || previousData)?.menu.map(item => (
					<CartItem
						key={`cart-item-${item.id}`}
						{...item}
						count={cartItems[item.id]}
						menuItemId={item.id}
					/>
				))}
			</div>
			{cartSumItemPosition === CartSumItemPosition.bottom && cartSumItem}
			{appendix}
		</div>
	)
}