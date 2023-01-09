import { makeVar } from '@apollo/client'

export const cartOpenedState = makeVar(false)

export const OpenCart = () => {
	cartOpenedState(true)
}

export const closeCart = () => {
	cartOpenedState(false)
}

export const toggleCart = () => {
	cartOpenedState(!cartOpenedState())
}
