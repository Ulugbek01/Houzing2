import styled from 'styled-components';

const getPosition = (position) => {
	switch (position) {
		case 'left':
			return {
				left: '12px',
			};

		default:
			return {
				right: '12px',
			};
	}
};

export const Section = styled.section`
	padding: 96px 0 48px;
	position: relative;
`;

export const Container = styled.div`
	max-width: var(--width);
	margin: 0 auto;
`;

export const CardsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid red;
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 45px;
	height: 45px;
	background: #fff;
	border: 1px solid #e6e9ec;
	box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
	border-radius: 50%;
	cursor: pointer;
	position: absolute;
	top: 50%;
	${({ position }) => getPosition(position)}

	svg path {
		fill: #0d263b;
	}
`;
