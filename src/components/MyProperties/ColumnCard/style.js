import styled from "styled-components";

const getPosition = (value) => {
    if(value) {
        return {
            top: '4px',
            left: '4px',
        }
    }
}

export const Container = styled.div`
    max-width: var(--width);
    width: 100%;
    margin-top: 32px;

    .title-wrapper {
        align-items: center;
        justify-content: space-between;

        & li {
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            color: #0D263B;
        }

        & li:first-child {
            max-width: 30%;
            width: 100%;
        }

        & li:nth-child(2){
            padding-left: 20px;
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #d6d6d6;
    border-radius: 3px;
    box-shadow: 2px 2px 3px 1px #d6d6d6;

    .listing-title {
        display: flex;

        .city-name {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #0D263B;
            word-wrap: break-word;
        }

        .city-desc {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #696969;
        }

        .title-flex{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px 0;
        }

        .price {
            .discount {
                margin-bottom: 0;
                text-decoration: line-through;
                color: #696969;
            }

            .active-price {
                font-weight: 600;
                line-height: 24px;
                color: #0D263B;
            }
        }
    }

    .listing-title__img {
        width: 200px;
        height: 200px;
        margin-right: 16px;
        position: relative;
        
        & img {
            width: 100%;
            height: 100%;
            border-radius: 3px;
        }
    }
`;

export const Button = styled.button`
    padding: 6px 12px;
    background: ${({bgType}) => bgType === 'primary' ? '#0061DF' : '#0D263B'};
    margin-left: ${({ml}) => ml ? `${ml}px` : ''};
    border-radius: 3px;
    color: #fff;
    font-size: 10px;
    border: none;
    cursor: pointer;

    position: absolute;
    ${({position}) => getPosition(position)}
`;

export const IconWrapper = styled.div`
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F6F8F9;
    border-radius: 60px;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 10px;
    }
`;


