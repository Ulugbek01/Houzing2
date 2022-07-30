import styled from "styled-components"

const getPosition = (value) => {
    switch (value) {
        case 'left':
            return {
                left: '-50px',
            }
    
        default:
            return {
                right: '-50px',
            }
    }
}

export const Container = styled.div`
   max-width: var(--width);
   width: 100%;
   margin: 0 auto;
   position: relative;

`;


export const CarouselWrapper = styled.div`
margin-top: 32px;
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

