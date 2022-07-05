import React from 'react';
import { Carousel } from 'antd';
import apartment1 from '../../../assets/images/home-img.jpg';
import apartment2 from '../../../assets/images/home-img.jpg';
import apartment3 from '../../../assets/images/home-img.jpg';
import { ImgWrapper } from './style';

const contentStyle = [
	{ id: 1, url: apartment1 },
	{ id: 2, url: apartment2 },
	{ id: 3, url: apartment3 },
];
const HeroCarousel = () => {
	return (
		<Carousel autoplay>
			{contentStyle.map((item) => (
				<ImgWrapper key={item.id}>
					<img src={item.url} alt='img' />
				</ImgWrapper>
			))}
		</Carousel>
	);
};

export default HeroCarousel;
