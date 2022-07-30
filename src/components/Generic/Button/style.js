import styled from "styled-components";

const getType = (value) => {
    switch (value) {
       case 'primary':
			return {
				background: '#0061DF',
				color: '#fff',
				border: 'none',
			}
		case 'secondary':
			return {
				background: '#0D263B',
				color: '#fff',
				border: '1px solid #fff'
			}
		case 'light':
			return {
				background: '#fff',
				color: '#0D263B',
				border: '1px solid #E6E9EC',
			}
        default:
            return {
				background: '#F6F8F9',
				color: '#0D263B',
				border: '1px solid #0D263B'
			}
    }
}

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({width}) => width ? `${width}px`: '100%'};
	height: ${({height}) => height ? `${height}px`: '44px'};
	margin-top: ${({mt}) => mt ? `${mt}px` : ''};
	margin-right: ${({mr}) => mr ? `${mr}px` : ''};
	margin-bottom: ${({mb}) => mb ? `${mb}px` : ''};
	margin-left: ${({ml}) => ml ? `${ml}px` : ''};
	margin: 0 ${({mAuto}) => mAuto && 'auto'};
	font-family: 'Montserrat', sans-serif;
	border-radius: 2px;
	font-size: 14px;
	line-height: 20px;
	outline: none;
	cursor: pointer;
	
	${({type}) => getType(type)}
	
	&:active {
		transform: scale(1.01);
	}
`;