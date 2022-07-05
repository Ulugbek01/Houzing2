import styled from "styled-components";
import { ReactComponent as houses } from '../../../assets/icons/houses.svg';

const getType = (type) => {
	switch (type) {
		case 'primary':
			return {
				border: '1px solid #E6E9EC',
			}					
		default:
			return {
				border: 'none',
				borderBottom:'2px solid #E6E9EC',
			}
	}
}
export const Wrapper = styled.div`
	position: relative;
	flex: 1;
`;

export const Container = styled.input`	
	width: ${({width}) => width ? `${width}px`: '100%'};
	height: ${({height}) => height ? `${height}px`: '44px'};
	margin-top: ${({mt}) => mt ? `${mt}px` : ''};
	margin-right: ${({mr}) => mr ? `${mr}px` : ''};
	margin-bottom: ${({mb}) => mb ? `${mb}px` : ''};
	margin-left: ${({ml}) => ml ? `${ml}px` : ''};
	
	padding-top: ${({pt}) => pt ? `${pt}px` : ''};
	padding-right: ${({pr}) => pr ? `${pr}px` : ''};
	padding-bottom: ${({pb}) => pb ? `${pb}px` : ''};
	padding-left: ${({pl}) => pl ? `${pl}px` : '16px'};
	padding: ${({py}) => py ? `${py}px` : ''} '';
	font-family: 'Montserrat', sans-serif;
	outline: none;
	border-radius: 2px;
	font-size: 14px;
	line-height: 20px;
	color: var(--primary-text-color);

	${({type}) => getType(type)}

	&:focus {
		border-color: #0061DF;
	}
`;

export const Houses = styled(houses)`
	position: absolute;
	left: 16px;
	top: 15px;
`;