import React from 'react';
import { ChooseUseItemsWrapper, Container, Section } from './style';
import { ReactComponent as Persons } from '../../../assets/icons/person-emoji.svg';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { ReactComponent as Financing } from '../../../assets/icons/financing.svg';
import { ReactComponent as Location } from '../../../assets/icons/map.svg';

const ChooseUse = () => {
	return (
		<Section className='choose-use'>
			<Container>
				<h2 className='section-title'>Why Choose Us?</h2>
				<p className='section-dscr to-center'>
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</p>

				<ChooseUseItemsWrapper>
					<ChooseUseItemsWrapper.Item>
						<Persons />
						<ChooseUseItemsWrapper.Item.Title>
							Trusted By Thousands
						</ChooseUseItemsWrapper.Item.Title>
						<ChooseUseItemsWrapper.Item.Dscr>
							With over 1 million+ homes for sale available on the website,
							Trulia can match you with a house you will want to call home.
						</ChooseUseItemsWrapper.Item.Dscr>
					</ChooseUseItemsWrapper.Item>
					<ChooseUseItemsWrapper.Item>
						<Home />
						<ChooseUseItemsWrapper.Item.Title>
							Wide Renge Of Properties
						</ChooseUseItemsWrapper.Item.Title>
						<ChooseUseItemsWrapper.Item.Dscr>
							With over 1 million+ homes for sale available on the website,
							Trulia can match you with a house you will want to call home.
						</ChooseUseItemsWrapper.Item.Dscr>
					</ChooseUseItemsWrapper.Item>
					<ChooseUseItemsWrapper.Item>
						<Financing />
						<ChooseUseItemsWrapper.Item.Title>
							Financing Made Easy
						</ChooseUseItemsWrapper.Item.Title>
						<ChooseUseItemsWrapper.Item.Dscr>
							With over 1 million+ homes for sale available on the website,
							Trulia can match you with a house you will want to call home.
						</ChooseUseItemsWrapper.Item.Dscr>
					</ChooseUseItemsWrapper.Item>
					<ChooseUseItemsWrapper.Item>
						<Location />
						<ChooseUseItemsWrapper.Item.Title>
							See Neighborhoods
						</ChooseUseItemsWrapper.Item.Title>
						<ChooseUseItemsWrapper.Item.Dscr>
							With over 1 million+ homes for sale available on the website,
							Trulia can match you with a house you will want to call home.
						</ChooseUseItemsWrapper.Item.Dscr>
					</ChooseUseItemsWrapper.Item>
				</ChooseUseItemsWrapper>
			</Container>
		</Section>
	);
};

export default ChooseUse;
