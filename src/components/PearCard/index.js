// @ts-nocheck
import React from 'react';
import './pearCard.scss';
import GreenButton from '../GreenButton';
import arrowUpBlack from '../../assets/arrowUp-black.png';
export const PearCard = ({
	type,
	topTitle,
	bottomTitle,
	imageSrc,
	children,
}) => {
	return (
		<div className={`pearCard ${type}`}>
			<div className='column-wrapper'>
				<div className='title-wrapper'>
					<div className='top-title'>{topTitle}</div>
					<div className='and'>And</div>
					<div className='bottom-title'>{bottomTitle}</div>
				</div>

				<div
					style={{
						transform:
							type === 'right'
								? 'translate(50px, 60px)'
								: 'translate(-50px, 60px)',
						alignSelf: type === 'right' ? 'flex-start' : 'flex-end',
					}}
					className='column-image-wrapper'
				>
					<img className='column-image' src={imageSrc} alt='' />
				</div>
			</div>
			<div className='description'>
				{children}
				<GreenButton text={'Launch dApp'} image={arrowUpBlack} />
			</div>
		</div>
	);
};
