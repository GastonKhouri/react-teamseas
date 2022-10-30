import { useState } from 'react';
import { Box, Heading, Radio, RadioGroup, Spinner, Stack, VStack } from '@chakra-ui/react';
import { useQuery } from 'urql';

import { LeaderboardItem } from '.';
import { DonationsResponse, } from '../interfaces';
import { GET_DONATIONS } from '../gql';

export const Leaderboard = () => {

	const [ orderBy, setOrderBy ] = useState( 'createdAt' );

	const [ { data, fetching, error } ] = useQuery<DonationsResponse>( {
		query: GET_DONATIONS,
		variables: { field: orderBy },
	} );

	if ( error ) return <p>Oh no... { error.message }</p>;

	return (
		<Box w="100%">

			<VStack spacing={ 4 }>

				<Heading as="h1" size="2xl">
					LEADERBOARD
				</Heading>

				<RadioGroup onChange={ setOrderBy } value={ orderBy }>
					<Stack direction='row'>
						<Radio value='createdAt'>Most Recent</Radio>
						<Radio value='count'>Most Trash</Radio>
					</Stack>
				</RadioGroup>

				{
					fetching
						? <Spinner size="lg" />
						: data?.donations.map( donation => (
							<LeaderboardItem
								key={ donation.id }
								donation={ donation }
							/>
						) )
				}

			</VStack>
		</Box>
	);
};