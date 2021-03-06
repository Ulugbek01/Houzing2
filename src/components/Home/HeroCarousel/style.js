import styled from 'styled-components';
import { ReactComponent as beds } from '../../../assets/icons/beds.svg';
import { ReactComponent as bath } from '../../../assets/icons/bath.svg';
import { ReactComponent as garage } from '../../../assets/icons/car.svg';
import { ReactComponent as ruler } from '../../../assets/icons/ruler.svg';

export const ImgWrapper = styled.div`
	position: relative;

	.prev-icon {
		position: absolute;
		top: 50%;
		left: 32px;
	}

	.next-icon {
		position: absolute;
		top: 50%;
		right: 32px;
	}

	@media screen and (max-width: 576px){
		.next-icon, .prev-icon {
			display: none;
		}
	}
`;

ImgWrapper.Overlay = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.65);
	position: absolute;
	text-align: center;
	top: 0;
	left: 0;
`;

ImgWrapper.Overlay.Title = styled.h1`
	font-weight: 700;
	font-size: 44px;
	line-height: 48px;
	letter-spacing: -0.02em;
	color: var(--text-white);
	margin-bottom: 0;

	@media screen and (max-width: 576px){
		font-size: 28px;
		line-height: 36px;
		letter-spacing: -0.02em;
	} 
`;

ImgWrapper.Overlay.Dscr = styled.p`
	color: var(--text-white);
	margin: 8px 0 24px 0;
`;

ImgWrapper.Overlay.IconsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

ImgWrapper.Overlay.IconItem = styled.div`
	text-align: center;
	&:not(:last-child) {
		margin-right: 24px;
	}

	svg path {
		fill: #fff;
	}

	.icon-name {
		color: var(--text-white);
	}
`;

export const Beds = styled(beds)``;

export const Bath = styled(bath)``;

export const Garage = styled(garage)``;

export const Ruler = styled(ruler)``;

ImgWrapper.Overlay.Price = styled.h3`
	font-weight: 600;
	margin: 24px 0 48px 0;
	font-size: 28px;
	line-height: 36px;
	letter-spacing: -0.02em;
	color: var(--text-white);
`;

export const Button = styled.button`
	width: 180px;
	height: 44px;
	background: transparent;
	color: var(--text-white);
	border: 1px solid #ffffff;
	border-radius: 2px;
	cursor: pointer;

	:active {
		transform: scale(1.01);
	}
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 45px;
	height: 45px;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 50%;
	z-index: 1111;
	cursor: pointer;
`;
