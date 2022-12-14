import { FooterLink } from '../footer-link/footer-link.component'

export const Footer = () => {
	return (
		<div className="bg-gray-900 p-12 mt-autow">
			<div className="mb-4">
				<span className="uppercase font-bold text-sm text-zinc-500">
					Контакти
				</span>
			</div>
			<div className="mb-8">
				<ul>
					<FooterLink href="tel:+380964983420"> 096 498 34 20</FooterLink>
					<FooterLink href="mailto:serhijsav@gmail.com">
						serhijsav@gmail.com
					</FooterLink>
				</ul>
			</div>
			<hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8" />
			<div>
				<span className="text-xl font-semibold text-white">🍕 PizzaStack</span>
			</div>
		</div>
	)
}
