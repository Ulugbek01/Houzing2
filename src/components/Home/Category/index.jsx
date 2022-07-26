import React, {useRef, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import { useQuery } from 'react-query';
import { BtnWrapper, Container, Section } from './style';
import Card from './Card';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/left-arrow.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/right-arrow.svg';

const responsive = {
	0: { items: 1 },
	768: { items: 2 },
	992: { items: 3 },
	1200: { items: 4 },
};


const Category = () => {
	const [list, setList] = useState([]);
	const slider = useRef();

	useQuery('list', () => {return fetch('https://houzing-app.herokuapp.com/api/v1/categories/list').then((res) => res.json())}, 
	{
		onSuccess: (res) => {
			let categories = res?.data.map((item) => { 
				return <Card key={item.id} title={item.name}/>
			}
			)		
			setList(categories);
		}
	}
	)
	console.log(list);

	return (
		<Section className='category'>
			<BtnWrapper position='left' onClick={() => slider.current.slidePrev()}><ArrowLeft /></BtnWrapper>
			<BtnWrapper onClick={ () => slider.current.slideNext()}><ArrowRight/></BtnWrapper>
			<Container>
				<h2 className='section-title'>Category</h2>
				<p className='section-dscr to-center'>
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</p>

				<AliceCarousel 
					items={list}
					responsive={responsive}
					mouseTracking={true}
					autoPlay={true}
					controlsStrategy='alternate'
					// infinite={true}
					animationDuration={600}
					ref={slider}
				/>
			</Container>
		</Section>
	);
};

export default Category;
