import {
	ApolloClient,
	ApolloLink,
	concat,
	HttpLink,
	InMemoryCache,
} from '@apollo/client'
import { config } from './config'

const httpLink = new HttpLink({
	uri: config.hasuraEndpoint,
})

const authMiddleware = new ApolloLink((operation, forward) => {
	const token = localStorage.getItem('jwt')
	if (token) {
		operation.setContext({
			headers: {
				authorization: `Bearer ${token}`,
			},
		})
	}

	return forward(operation)
})

export const apolloClient = new ApolloClient({
	link: concat(authMiddleware, httpLink),
	cache: new InMemoryCache(),
})
