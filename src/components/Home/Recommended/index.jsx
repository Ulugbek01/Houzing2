import React from 'react';
import { Section, Container, CardsWrapper } from './style';
import apartment1 from '../../../assets/images/apartment1.jpg';
import apartment2 from '../../../assets/images/apartment2.jpg';
import apartment3 from '../../../assets/images/apartment3.jpg';
import apartment4 from '../../../assets/images/apartment1.jpg';
import apartment5 from '../../../assets/images/apartment2.jpg';
import AliceCarousel from 'react-alice-carousel';
import Card from '../../Generic/Card';

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

const Recommended = () => {
	return (
		<Section className='recommended'>
			<Container>
				<h2 className='section-title'>Recommended</h2>
				<p className='section-dscr to-center'>
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</p>
				<CardsWrapper>
					<AliceCarousel
						items={items}
						mouseTracking
						controlsStrategy='alternate'
						responsive={responsive}
						// autoPlay={true}
						infinite={true}
						animationDuration={600}
					/>
				</CardsWrapper>
			</Container>
			;
		</Section>
	);
};

export default Recommended;
