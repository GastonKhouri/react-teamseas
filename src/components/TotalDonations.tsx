import { Heading } from '@chakra-ui/react';
import { useSubscription, useQuery } from 'urql';

import { GET_TOTAL_UPDATED_DONATIONS, handleTotalSubscription, GET_TOTAL_DONATIONS } from '../gql';
import { TotalDonationsResponse } from '../interfaces';
import { Counter } from './';

export const TotalDonations = () => {

	const [ res ] = useSubscription( {
		query: GET_TOTAL_UPDATED_DONATIONS
	}, handleTotalSubscription );

	const [ { data, error } ] = useQuery<TotalDonationsResponse>( {
		query: GET_TOTAL_DONATIONS,
	} );

	if ( error ) return <p>Oh no... { error.message }</p>;

	return (
		<Heading as="h2" size="4xl">
			<Counter
				to={ res?.data || data?.totalDonations }
			/>
		</Heading>
	);
};
