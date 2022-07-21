import styled from 'styled-components';

export const Section = styled.section`
	background: #f5f7fc;
	padding: 48px 0;
`;

export const Container = styled.div`
	max-width: var(--width);
	margin: 0 auto;

	.section-dscr {
		margin-bottom: 24px;
	}
`;

export const ChooseUseItemsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 576px){
		flex-direction: column;
	}
`;

ChooseUseItemsWrapper.Item = styled.div`
	text-align: center;
	&:not(:last-child) {
		margin-right: 70px;
	}

	@media screen and (max-width: 576px){
		&:not(:last-child) {
			margin-right: 0;
		}

		& {
			padding: 0 44px;
		}
	}
`;

ChooseUseItemsWrapper.Item.Title = styled.h3`
	margin: 24px 0 8px;
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	color: var(--primary-text-color);
`;

ChooseUseItemsWrapper.Item.Dscr = styled.p`
	line-height: 24px;
	color: var(--secondary-text-color);
`;
