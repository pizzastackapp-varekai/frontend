import { Customers } from '@app/core/types'

export interface UpdateInfoProps {
	initialValues?: Customers
	onSubmitCallback?: (values: UpdateInfoFormValues) => Promise<void>
	isUpdating?: boolean
}

export interface UpdateInfoFormValues {
	phoneNumber: string
	address: string
	name: string
}
