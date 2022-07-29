import styled from "styled-components"

const getPosition = (value) => {
    switch (value) {
        case 'left':
            return {
                left: 0,
            }
    
        default:
            return {
                right: 0,
            }
    }
}

export const Container = styled.div`
    position: relative;

`;


export const CarouselWrapper = styled.div`
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
    ${({position}) => getPosition(position)}

    svg path {
        fill: #0d263b;
    }
`;

