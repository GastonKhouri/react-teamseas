import { Donation } from '.';

export interface TotalDonationsResponse {
	totalDonations: number;
}

export interface DonationsResponse {
	donations: Donation[];
}