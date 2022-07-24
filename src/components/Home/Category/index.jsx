import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { CategoryItem, Container, Section } from './style';
import categoryimg1 from '../../../assets/images/category-img1.png';
import categoryimg2 from '../../../assets/images/category-img2.png';
import categoryimg3 from '../../../assets/images/category-img3.png';
import categoryimg4 from '../../../assets/images/category-img4.png';

const responsive = {
	0: { items: 1 },
	768: { items: 2 },
	992: { items: 3 },
	1200: { items: 4 },
};

const items = [
	<CategoryItem>
		<img src={categoryimg1} alt="category-img" />
	</CategoryItem>,
	<CategoryItem>
		<img src={categoryimg2} alt="category-img" />
	</CategoryItem>,
	<CategoryItem>
		<img src={categoryimg3} alt="category-img" />
	</CategoryItem>,
	<CategoryItem>
		<img src={categoryimg4} alt="category-img" />
	</CategoryItem>,
	<CategoryItem>
		<img src={categoryimg1} alt="category-img" />
	</CategoryItem>,
	<CategoryItem>
		<img src={categoryimg3} alt="category-img" />
	</CategoryItem>,
];

const Category = () => {
	return (
		<Section className='category'>
			<Container>
				<h2 className='section-title'>Category</h2>
				<p className='section-dscr to-center'>
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</p>

				<AliceCarousel 
					responsive={responsive}
					items={items}
					mouseTracking={true}
					autoPlay={true}
					controlsStrategy='alternate'
					infinite={true}
					animationDuration={600}
				/>
			</Container>
		</Section>
	);
};

export default Category;
