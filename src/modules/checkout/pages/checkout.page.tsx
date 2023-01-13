import { FC } from 'react'
import { ActionPaper } from '@app/common/components/action-paper/action-paper.component'
import { Container } from '@app/common/components/container/container.component'
import { CheckoutForm } from '../checkout-form/checkout-form.component'
import { CartList } from '@app/modules/cart/components/cart-list/cart-list.component'

interface CheckoutPageProps {}

export const CheckoutPage: FC<CheckoutPageProps> = () => {
	return (
		<Container>
			<ActionPaper title="Замовлення">
				<div className="flex gap-19">
					<div className="flex-1">
						<CheckoutForm />
					</div>
					<div className="flex-1">
						<CartList scrollDisabled cartSumItemPosition="top" />
					</div>
				</div>
			</ActionPaper>
		</Container>
	)
}