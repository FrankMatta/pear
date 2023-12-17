import React from 'react';
import logo from '../../assets/logo.png';
import socialMedia from '../../assets/social-media.png';
import './footer.scss';

const Footer = () => {
	return (
		<div className='container'>
			<div className='footerContainer'>
				<div className='left'>
					<img src={logo} alt='logo' />

					<div className='contractAdress-container'>
						<div className='title'>Contract Address:</div>
						<p className='address'>
							0x5dcd6272c3cbb250823f0b7e6c618bce11b21f90
						</p>
					</div>
					<div className='social-media'>
						<img src={socialMedia} alt='' />
					</div>
					<div className='message'>
						<p>
							Make sure to copy the attached CA of $PEAR and paste it into
							UniSwap. Avoid copying the CA from other resources. Don't enter
							manually.
						</p>
					</div>
					<div className='copyRight'>
						<p>© 2023 PEAR. All rights reserved.</p>
					</div>
				</div>
				<div className='links-container'>
					<div className='title'>Links</div>
					<div className='links'>
						<div className='left-column'>
							<p className='link'>CoinMarketCap</p>
							<p className='link'>Coingecko</p>
							<p className='link'>Nomics</p>
							<p className='link'>DexTools</p>
							<p className='link'>Etherscan</p>
							<p className='link'>WhitePaper</p>
						</div>
						<div className='right-column'>
							<p className='link'>Locked Liquidity</p>
							<p className='link'>Audit</p>
							<p className='link'>Support</p>
							<p className='link'>Proposals</p>
							<p className='link'>Tokenomics</p>
							<p className='link'>Uniswap</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
