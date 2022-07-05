import styled from "styled-components";

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

export const Container = styled.input`
	width: ${({width}) => width ? `${width}px`: '100%'};
	height: ${({height}) => height ? `${height}px`: '100%'};
	margin-top: ${({mt}) => mt ? `${mt}px` : ''};
	margin-right: ${({mr}) => mr ? `${mr}px` : ''};
	margin-bottom: ${({mb}) => mb ? `${mb}px` : ''};
	margin-left: ${({ml}) => ml ? `${ml}px` : ''};
	padding: ${({py}) => py ? `${py}px` : ''} 0;
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