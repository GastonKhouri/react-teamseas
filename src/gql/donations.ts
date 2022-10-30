import { gql } from 'urql';

// Queries
export const GET_TOTAL_DONATIONS = gql`
	query Query {
		totalDonations
	}
`;

export const GET_DONATIONS = gql`
	query Donations($field: String) {
		donations(field: $field) {
			id
			count
			displayName
			team
			message
			createdAt
		}
	}
`;

// Mutations
export const ADD_DONATION = gql`
	mutation CreateDonation($createDonationInput: CreateDonationInput!) {
  		createDonation(createDonationInput: $createDonationInput) {
  		  	id
  		  	count
  		  	createdAt
  		}
	}
`;

// Subscriptions
export const GET_TOTAL_UPDATED_DONATIONS = gql`
	subscription Subscription {
		totalUpdated
	}
`;

export const handleTotalSubscription = ( prev: any, newTotal: any ) => {
	return newTotal.totalUpdated;
}

