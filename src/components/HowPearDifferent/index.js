// @ts-nocheck
import { PearCard } from '../PearCard';
import './howPearDifferent.scss';
import moneyReceipt from '../../assets/money-receipt.png';
import trustScore from '../../assets/trust-score.png';
import pearExplorer from '../../assets/pear-explorer.png';

const HowPearDifferent = () => {
	return (
		<section className='pear-different-section'>
			<div className='green-background'></div>
			<h3>How is Pear Different?</h3>
			<div className='how_is_pear_different container'>
				<PearCard
					type={'left'}
					topTitle='Lending & Borrowing'
					bottomTitle='Staking Pools Creation'
					imageSrc={moneyReceipt}
				>
					<p>
						<span className='green'>Lending and Borrowing service</span> enables
						our users to lend a wide range of tokens, including new tokens,
						cryptocurrencies, meme coins, blue-chip tokens, and more, across
						multiple blockchain networks.
					</p>
					<p>
						<span className='green'>Staking Pools Creation </span> enables a
						wide range of users, whether they are developers and project owners
						looking to establish a revenue-sharing system for their token
						holders, influencer seeking to distribute rewards to their
						followers, or individuals with unique staking needs. We provide a
						platform that simplifies the creation of staking pools.
					</p>
				</PearCard>
				<PearCard
					type={'right'}
					topTitle='Trust Score'
					bottomTitle='Profile Rank'
					imageSrc={trustScore}
				>
					<p>
						Every user on the platform will have a{' '}
						<span className='green'>Trust Score</span>. This score increases
						when users successfully complete swaps, burn more tokens, and
						promptly accept transactions. Having a high trust score comes with
						several benefits.
					</p>
					<p>
						Users will advance in <span className='green'>Profile Rank</span> as
						they engage more with the platform through a gamified mechanism and
						rewarding system. Our platform ensures that users' efforts and usage
						of the dApp are never in vain, as they will be consistently rewarded
						with airdrops for their ongoing participation, completion of swaps,
						and transactions.
					</p>
				</PearCard>
				<PearCard
					type={'left'}
					topTitle='Pear Explorer'
					bottomTitle='Pear Analytics'
					imageSrc={pearExplorer}
				>
					<p>
						<span className='green'>Pear Explorer</span> is a dedicated section
						that enables users to track and filter PearSwap-related transactions
						based on their preferences. Users can apply various filters to
						refine their searches and track specific transactions or users.{' '}
					</p>
					<p>
						<span className='green'>Pear Analytics</span> section will serve as
						a comprehensive dashboard that showcases all the key metrics,
						numbers, and growth statistics of the platform. Users will be able
						to access data related to user activity, transaction volume, and
						various other performance indicators.
					</p>
				</PearCard>
			</div>
		</section>
	);
};
export default HowPearDifferent;
