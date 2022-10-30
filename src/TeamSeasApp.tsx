import { Leaderboard, DonationWizard, Header, TotalDonations } from './components';
import { MainLayout } from './layouts/MainLayout';

export const TeamSeasApp = () => {

	return (
		<MainLayout>

			<Header />

			<TotalDonations />

			<DonationWizard />

			<Leaderboard />

		</MainLayout>
	);
}

