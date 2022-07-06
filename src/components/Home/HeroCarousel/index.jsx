import React, { useRef } from 'react';
import { Carousel } from 'antd';
import apartment1 from '../../../assets/images/home-img.jpg';
import apartment2 from '../../../assets/images/home-img.jpg';
import apartment3 from '../../../assets/images/home-img.jpg';
import { ReactComponent as Prev } from '../../../assets/icons/prev.svg';
import { ReactComponent as Next } from '../../../assets/icons/next.svg';
import { IconWrapper, ImgWrapper } from './style';

const contents = [
	{ id: 1, url: apartment1 },
	{ id: 2, url: apartment2 },
	{ id: 3, url: apartment3 },
];
const HeroCarousel = () => {
	const slider = useRef();

	return (
		<Carousel autoplay={true} ref={slider}>
			{contents.map((item) => (
				<ImgWrapper key={item.id}>
					<IconWrapper
						className='prev-icon'
						onClick={() => slider.current.prev()}>
						<Prev />
					</IconWrapper>
					<img src={item.url} alt='img' />
					<ImgWrapper.Overlay></ImgWrapper.Overlay>
					<IconWrapper
						className='next-icon'
						onClick={() => slider.current.next()}>
						<Next />
					</IconWrapper>
				</ImgWrapper>
			))}
		</Carousel>
	);
};

export default HeroCarousel;
