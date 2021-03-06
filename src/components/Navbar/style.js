import styled, { css } from 'styled-components';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';

const FlexBox = css`
	display: flex;
	align-items: center;
`;

export const NavbarWrapper = styled.div`
	background-color: var(--primary-bg-color);
`;

export const Container = styled.div`
	${FlexBox};
	justify-content: space-between;
	max-width: var(--width);
	width: 100%;
	margin: 0 auto;

	@media screen and (max-width: 1200px){
		width: 96%;
	}

	@media screen and (max-width: 576px){
		.login {
			display: none;
		}	
	}
`;

export const LogoWrapper = styled.div`
	padding: 14px 0;
`;

export const Logo = styled(logo)`
	cursor: pointer;
`;

NavbarWrapper.NavItems = styled.div`
	a:not(:last-child) {
		margin-right: 64px;
	}

	a {
		position: relative;
	}

	a::after {
		content: '';
		width: 0;
		height: 1px;
		background: #fff;
		transition: all 0.37s ease-in-out;
	}

	a:hover::after {
		content: '';
		width: 100%;
		height: 1px;
		background: #fff;
		position: absolute;
		left: 0;
		bottom: -2px;
	}

	@media screen and (max-width: 768px){
		a:not(:last-child) {
			margin-right: 24px;
		}
	}

	@media screen and (max-width: 576px){
		& {
			display: none;
		}
	}
`;

export const activeStyle = ({ isActive }) => {
	return {
		color: isActive ? '#fff' : '#a7a8a8',
	};
};
