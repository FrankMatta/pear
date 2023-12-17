import React from 'react';
import './greenButton.scss';

const GreenButton = ({ text, callBack, image }) => {
	return (
		<button className='greenButton' onClick={callBack}>
			{text}
			{image && (
				<span style={{ margin: '4px' }}>
					<img
						src={image}
						alt='img'
						width={10}
						height={10}
						style={{ objectFit: 'contain', marginLeft: '5px' }}
					/>
				</span>
			)}
		</button>
	);
};
export default GreenButton;
