import React from 'react';
import { Section, Container, CardsWrapper } from './style';
const Recommended = () => {
	const cardInfo = [
		{
			id: 1,
			url: '',
			title: 'New Apartment Nice Wiew',
			dscr: 'Quincy St, Brooklyn, NY, USA',
		},
		{
			id: 2,
			url: '',
			title: 'New Apartment Nice Wiew',
			dscr: 'Quincy St, Brooklyn, NY, USA',
		},
		{
			id: 3,
			url: '',
			title: 'New Apartment Nice Wiew',
			dscr: 'Quincy St, Brooklyn, NY, USA',
		},
		{
			id: 4,
			url: '',
			title: 'New Apartment Nice Wiew',
			dscr: 'Quincy St, Brooklyn, NY, USA',
		},
		{
			id: 5,
			url: '',
			title: 'New Apartment Nice Wiew',
			dscr: 'Quincy St, Brooklyn, NY, USA',
		},
	];

	return (
		<Section className='recommended'>
			<Container>
				<h2 className='section-title'>Recommended</h2>
				<p className='section-dscr to-center'>
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</p>

				<CardsWrapper></CardsWrapper>
			</Container>
			;
		</Section>
	);
};

export default Recommended;
