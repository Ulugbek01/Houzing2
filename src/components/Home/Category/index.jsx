import React, {useRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import { BtnWrapper, CategoryItem, Container, Section } from './style';
import categoryimg1 from '../../../assets/images/category-img1.png';
import categoryimg2 from '../../../assets/images/category-img2.png';
import categoryimg3 from '../../../assets/images/category-img3.png';
import categoryimg4 from '../../../assets/images/category-img4.png';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/left-arrow.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/right-arrow.svg';

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

	const slider = useRef();
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
					responsive={responsive}
					items={items}
					mouseTracking={true}
					autoPlay={true}
					controlsStrategy='alternate'
					infinite={true}
					animationDuration={600}
					ref={slider}
				/>
			</Container>
		</Section>
	);
};

export default Category;
