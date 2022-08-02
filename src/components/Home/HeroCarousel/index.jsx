import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';
import apartment1 from '../../../assets/images/home-img.jpg';
import apartment2 from '../../../assets/images/home-img.jpg';
import apartment3 from '../../../assets/images/home-img.jpg';
import { ReactComponent as Prev } from '../../../assets/icons/prev.svg';
import { ReactComponent as Next } from '../../../assets/icons/next.svg';
import { Bath, Beds, Garage, IconWrapper, ImgWrapper, Ruler, Button } from './style';

const contents = [
	{ id: 1, url: apartment1 },
	{ id: 2, url: apartment2 },
	{ id: 3, url: apartment3 },
];
const HeroCarousel = () => {
	const slider = useRef();
	const navigate = useNavigate();

	return (
		<Carousel autoplay={true} ref={slider}>
			{contents.map((item) => (
				<ImgWrapper key={item.id}>
					<IconWrapper
						className='prev-icon'
						onClick={() => slider.current.prev()}>
						<Prev />
					</IconWrapper>
					<img className='main-img' src={item.url} alt='img' />
					<ImgWrapper.Overlay>
						<div>
							<ImgWrapper.Overlay.Title>
								Skyper Pool Partment
							</ImgWrapper.Overlay.Title>

							<ImgWrapper.Overlay.Dscr>
								112 Glenwood Ave Hyde Park, Boston, MA
							</ImgWrapper.Overlay.Dscr>

							<ImgWrapper.Overlay.IconsWrapper>
								<ImgWrapper.Overlay.IconItem>
									<Beds />
									<p className='icon-name'>4 beds</p>
								</ImgWrapper.Overlay.IconItem>
								<ImgWrapper.Overlay.IconItem>
									<Bath />
									<p className='icon-name'>5 Baths</p>
								</ImgWrapper.Overlay.IconItem>
								<ImgWrapper.Overlay.IconItem>
									<Garage />
									<p className='icon-name'>1 Garage</p>
								</ImgWrapper.Overlay.IconItem>
								<ImgWrapper.Overlay.IconItem>
									<Ruler />
									<p className='icon-name'>1200 Sq Ft</p>
								</ImgWrapper.Overlay.IconItem>
							</ImgWrapper.Overlay.IconsWrapper>

							<ImgWrapper.Overlay.Price>$5,250/mo</ImgWrapper.Overlay.Price>
							<Button onClick={() => navigate('/properties')}>Read more</Button>
						</div>
					</ImgWrapper.Overlay>
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
