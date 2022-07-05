import styled from "styled-components";

const getType = (type) => {
	switch (type) {
		case 'primary':
			return {
				background: '#0061DF',
			}					
		default:
			return {
				background: '#fff',
			}
	}
}

export const Container = styled.input`
	width: ${({width}) => width ? `${width}px`: '18px'};
	height: ${({height}) => height ? `${height}px`: '18px'};
	margin-top: ${({mt}) => mt ? `${mt}px` : ''};
	margin-right: ${({mr}) => mr ? `${mr}px` : ''};
	margin-bottom: ${({mb}) => mb ? `${mb}px` : ''};
	margin-left: ${({ml}) => ml ? `${ml}px` : ''};
	padding: ${({py}) => py ? `${py}px` : ''} 0;
	
	&[type="checkbox"] {
		border: 2px solid #E6E9EC;
	}
	${({types}) => getType(types)}
`;