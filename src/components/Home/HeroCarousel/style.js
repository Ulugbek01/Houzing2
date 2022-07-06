import styled from 'styled-components';

export const ImgWrapper = styled.div`
	position: relative;
	margin: 0 auto;

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
