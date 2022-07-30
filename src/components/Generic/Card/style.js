import styled from 'styled-components';

const getPosition = (position) => {
	switch (position) {
		case 'left':
			return {
				left: '20px',
			};

		default:
			return {
				right: '20px',
			};
	}
};

export const CardWrapper = styled.div`
	width: ${({ width }) => (width ? `${width}px` : '380px')};
	border: 1px solid #e6e9ec;
	border-radius: 3px;
	transition: all 0.37s linear;

	&:hover {
		transform: scale(1.01);
		box-shadow: rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px;
	}
`;

CardWrapper.Img = styled.div`
	height: 220px;
	position: relative;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
	}
`;

CardWrapper.Button = styled.button`
	width: ${({ width }) => (width ? `${width}px` : '73px')};
	height: ${({ height }) => (height ? `${height}px` : '23px')};
	background-color: ${({ btnType }) =>
		btnType === 'primary' ? '#0061DF' : '#0D263B'};
	font-weight: 600;
	font-size: 10px;
	line-height: 13px;
	border-radius: 3px;
	border: none;
	outline: none;
	color: var(--text-white);

	position: absolute;
	top: 20px;

	${({ position }) => getPosition(position)}
`;

CardWrapper.Title = styled.h3`
	font-size: 16px;
	line-height: 24px;
	color: var(--primary-text-color);
`;

CardWrapper.Dscr = styled.p`
	font-size: 14px;
	line-height: 20px;
	color: var(--secondary-text-color);
`;

CardWrapper.IconsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

CardWrapper.IconItem = styled.div`
	text-align: center;
`;

CardWrapper.Info = styled.div`
	padding: 24px 20px 16px 20px;
`;

CardWrapper.Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 20px;
	border-top: 1px solid #e6e9ec;
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 35px;
	height: 35px;
	background: ${({ selected }) => (selected ? '#CC5040' : '#f6f8f9')};
	border-radius: 50%;
	cursor: pointer;

	&:not(:last-child) {
		margin-right: 10px;
	}

	svg path {
		fill: ${({ selected }) => (selected ? '#fff' : '#696969')};
	}
`;

CardWrapper.Footer.Price = styled.div`
	.per-month {
		font-size: 12px;
		line-height: 20px;
		text-decoration-line: line-through;
		color: var(--secondary-text-color);
		text-decoration: line-through;
		margin-bottom: 0;
	}

	.price {
		font-weight: 600;
		line-height: 24px;
		color: var(--primary-text-color);
	}
`;

CardWrapper.Footer.Icons = styled.div`
	display: flex;
	align-items: center;
`;
