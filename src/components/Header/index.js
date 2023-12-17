// @ts-nocheck
import { useState, useEffect } from 'react';
import GreenButton from '../GreenButton';
import './header.scss';

// Images
import logo from '../../assets/logo.png';
import ethereum from '../../assets/ethereum.png';
import gas from '../../assets/gas.png';
import pear from '../../assets/pear.png';

const Header = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 1068px)');

		const handleMediaChange = (e) => {
			setIsMobile(e.matches);
		};

		// Initial check
		handleMediaChange(mediaQuery);

		// Add event listener for changes
		mediaQuery.addListener(handleMediaChange);

		// Clean up the event listener when the component is unmounted
		return () => {
			mediaQuery.removeListener(handleMediaChange);
		};
	}, []);

	return (
		<nav className={`head_navigation ${isMobile ? 'mobile' : ''}`}>
			<img src={isMobile ? pear : logo} alt='logo' />
			{!isMobile && (
				<div className='logoCenter'>
					<HeaderIconText logo={ethereum} title={'$ETH'} text={'$1845'} />
					<HeaderIconText logo={gas} text={'20GWei'} />
					<HeaderIconText logo={pear} title={'$PEAR'} text={'$0.0045'} />
				</div>
			)}

			{!isMobile && (
				<div className='actionButton'>
					<p>Register</p>
					<GreenButton text={'Log in'} />
				</div>
			)}

			{isMobile && <GreenButton text={'Connect Wallet'} />}
		</nav>
	);
};

export default Header;

const HeaderIconText = ({ logo, title, text }) => (
	<div className='headerIconText'>
		<img src={logo} alt='logo' />
		<div className='headerIconData'>
			{title && <p>{title}</p>}
			<p>{text}</p>
		</div>
	</div>
);
