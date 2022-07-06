import styled from 'styled-components';

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
`;

ImgWrapper.Overlay = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.65);
	position: absolute;
	top: 0;
	left: 0;
`;

ImgWrapper.Overlay.Title = styled.h1`
	font-weight: 700;
	font-size: 44px;
	line-height: 48px;
	letter-spacing: -0.02em;
	color: var(--text-white);
`;

ImgWrapper.Overlay.Dscr = styled.p`
	color: var(--text-white);
`;

ImgWrapper.Overlay.IconsWrapper = styled.div`
	display: flex;
	align-items: center;
`;

ImgWrapper.Overlay.IconItem = styled.div``;

ImgWrapper.Overlay.Price = styled.h3`
	font-weight: 600;
	font-size: 28px;
	line-height: 36px;
	letter-spacing: -0.02em;
	color: var(--text-white);
`;

ImgWrapper.Overlay.Button = styled.button`
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
