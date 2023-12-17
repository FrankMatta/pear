// @ts-nocheck
import './tags.scss';

import tag1 from '../../assets/tag1-photo.png';
import tag2 from '../../assets/tag2-photo.png';
import tag3 from '../../assets/tag3-photo.png';

const Tags = () => {
	return (
		<div className='tag_container'>
			<SingleTag icon={tag1} text={'Read More Articles'} />
			<SingleTag icon={tag2} text={'Read WhitePaper'} />
			<SingleTag icon={tag3} text={'$PEAR Tokenomics'} />
		</div>
	);
};
export default Tags;

const SingleTag = ({ icon, text }) => (
	<div className='singleTag'>
		<div className='tagPhoto'>
			<img src={icon} alt='' width={40} height={40} />
		</div>
		<p>{text}</p>
	</div>
);
