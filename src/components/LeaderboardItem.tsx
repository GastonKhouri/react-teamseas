import { Avatar, Badge, Box, Flex, Text } from '@chakra-ui/react';
import { formatDate } from '../helpers';
import { Donation } from '../interfaces';

interface Props {
	donation: Donation;
}

export const LeaderboardItem = ( { donation }: Props ) => {

	const { displayName, count, team, message, createdAt } = donation;

	return (
		<Flex boxShadow="md" p={ 3 } bg="white" borderRadius="lg" maxWidth="xl" w="100%">

			<Avatar size="lg" />

			<Box flex="1" ml={ 4 }>

				<Flex justifyContent="space-between" h="100%">

					<Flex flexDirection="column" textAlign="left">

						<Text fontWeight="bold" color="blue.500" fontSize="sm">
							{ team ? `#${ team.toUpperCase() }` : '' }
						</Text>
						<Text fontWeight="bold">{ displayName }</Text>
						<Text fontWeight="sm">{ message }</Text>

					</Flex>

					<Flex flexDirection="column" justifyContent="space-around" textAlign="right">

						<div>
							<Badge
								colorScheme="green"
								borderRadius="full"
								textTransform="lowercase"
								py={ 1 }
								px={ 3 }
								as="div"
							>
								{ count.toLocaleString() } pounds
							</Badge>
						</div>

						<Text fontSize="xs">{ formatDate( createdAt ) }</Text>

					</Flex>

				</Flex>

			</Box>


		</Flex>
	);
};
