import { Box, Button, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useMutation } from 'urql';
import { ADD_DONATION } from '../gql';
import { CountSelection, DonationDetails } from './';


export const DonationWizard = () => {

	const [ showConfirmation, setShowConfirmation ] = useState( false );

	const [ step, setStep ] = useState( 0 );

	const [ donationDetails, setDonationDetails ] = useState( {
		count: 20,
	} );

	const [ donationResult, createDonation ] = useMutation( ADD_DONATION );

	const next = ( values: any = {} ) => {

		const newDetails = { ...donationDetails, ...values };

		if ( step === pages.length - 1 ) {
			submitDonation( newDetails );
		} else {
			setStep( step + 1 );
			setDonationDetails( newDetails );
		}

	};

	const submitDonation = async ( values: any ) => {
		await createDonation( { createDonationInput: values } );
		setShowConfirmation( true );
	};

	const previous = () => {
		setStep( step - 1 );
	};

	const pages = [
		<CountSelection initialCount={ donationDetails.count } next={ next } />,
		<DonationDetails next={ next } previous={ previous } />,
	];

	return (
		<Box boxShadow="xl" p={ 8 } bg="white" minW="sm">
			{
				showConfirmation ? (
					<div>
						Thank you for your donation of $
						{ donationResult?.data.createDonation?.count }!!
					</div>
				) : (
					pages[ step ]
				)
			}
		</Box>
	);
};
