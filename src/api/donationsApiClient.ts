import { createClient, defaultExchanges, subscriptionExchange } from 'urql';
import { createClient as createWSClient } from 'graphql-ws';

import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL, VITE_WS_URL } = getEnvVariables();

export const wsClient = createWSClient( {
	url: VITE_WS_URL,
} );

export const client = createClient( {
	url: VITE_API_URL,
	exchanges: [
		...defaultExchanges,
		subscriptionExchange( {
			forwardSubscription: operation => ( {
				subscribe: sink => ( {
					unsubscribe: wsClient.subscribe( operation, sink ),
				} )
			} )
		} )
	]
} );
