import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import Card from '../../Generic/Card';
import { Section, Container, CardsWrapper, IconWrapper } from './style';
import apartment1 from '../../../assets/images/apartment1.jpg';
import apartment2 from '../../../assets/images/apartment2.jpg';
import apartment3 from '../../../assets/images/apartment3.jpg';
import apartment4 from '../../../assets/images/apartment1.jpg';
import apartment5 from '../../../assets/images/apartment2.jpg';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/left-arrow.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/right-arrow.svg';

const responsive = {
	0: { items: 1 },
	768: { items: 2 },
	1024: { items: 3 },
};

const items = [
	<Card
		title={'New Apartment Nice Wiew'}
		dscr={'Quincy St, Brooklyn, NY, USA'}
		url={apartment1}
	/>,
	<Card
		title={'New Apartment Nice Wiew'}
		dscr={'Quincy St, Brooklyn, NY, USA'}
		url={apartment2}
	/>,
	<Card
		title={'New Apartment Nice Wiew'}
		dscr={'Quincy St, Brooklyn, NY, USA'}
		url={apartment3}
	/>,
	<Card
		title={'New Apartment Nice Wiew'}
		dscr={'Quincy St, Brooklyn, NY, USA'}
		url={apartment4}
	/>,
	<Card
		title={'New Apartment Nice Wiew'}
		dscr={'Quincy St, Brooklyn, NY, USA'}
		url={apartment5}
	/>,
];

const Recommended = ({title}) => {
	const slider = useRef();

	return (
		<Section className='recommended'>
			<Container>
				<h2 className='section-title'>{title || 'Recommended'}</h2>
				<p className='section-dscr to-center'>
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</p>
				<CardsWrapper>
					<AliceCarousel
						items={items}
						mouseTracking
						controlsStrategy='alternate'
						responsive={responsive}
						autoPlay={true}
						animationDuration={600}
						ref={slider}
					/>
				</CardsWrapper>
			</Container>
			<IconWrapper position='left' onClick={() => slider.current.slidePrev()}>
				<ArrowLeft />
			</IconWrapper>
			<IconWrapper onClick={() => slider.current.slideNext()}>
				<ArrowRight />
			</IconWrapper>
		</Section>
	);
};

export default Recommended;
