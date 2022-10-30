import { Img, Heading, Text } from '@chakra-ui/react';
import logo from '../assets/TeamSeasLogo.png';

export const Header = () => {
	return (
		<>
			<Img src={ logo } h="32" pointerEvents="none" />
			<Heading as="h1" size="xl">JOIN THE MOVEMENT!</Heading>
			<Text>
				The team is growing everyday and scoring wins for the planet.
				<br /> Plant with us and track our progress!
			</Text>
		</>
	);
};
