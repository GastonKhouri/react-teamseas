import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'urql';

import { client } from './api';
import { theme } from './themes';
import { TeamSeasApp } from './TeamSeasApp';

import './index.css';

ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
	<React.StrictMode>
		<ChakraProvider theme={ theme }>
			<Provider value={ client }>
				<TeamSeasApp />
			</Provider>
		</ChakraProvider>
	</React.StrictMode>
);
