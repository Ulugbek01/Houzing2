import styled from 'styled-components';

const getPosition = (value) => {
	switch (value) {
		case 'left':
			return {left: '12px',}	
		default:
			return	{right: '12px'}
	}
}


export const Section = styled.section`
	padding: 96px 0;
	position: relative;
`;

export const Container = styled.div`
	max-width: var(--width);
	margin: 0 auto;
`;

export const CategoryItem = styled.div`
position: relative;
`;

export const BtnWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	cursor: pointer;
	border: 1px solid #E6E9EC;
	box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
	position: absolute;
	top: 48%;
	${({position}) => getPosition(position)}

	svg path {
		fill: #0d263b;
	}
`;

CategoryItem.Title = styled.h3`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 18px;
	line-height: 28px;
	color: #fff;
`;