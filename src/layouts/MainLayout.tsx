import { Grid, VStack, Box } from '@chakra-ui/react';
import { Footer } from '../components';

interface Props {
	children: React.ReactNode | React.ReactNode[];
}

export const MainLayout = ( { children }: Props ) => {
	return (
		<Box textAlign="center" fontSize="xl">

			<Grid minH="100vh" p={ 3 } bg="gray.50">
				<VStack spacing={ 8 }>

					{ children }

				</VStack>
			</Grid>

			<Footer />

		</Box>
	);
};
