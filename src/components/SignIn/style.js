import styled from "styled-components";

export const Container = styled.div`
    max-width: 580px;
    margin: 64px auto;
    background: #fff;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 24px 30px;

`;

export const RememberWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;

     .forgot {
        color: #0061DF;
        font-size: 14px;
        text-decoration: underline;
        cursor: pointer;
    }
`;

RememberWrapper.Box = styled.div`
    display: flex;
    align-items: center;

    label {
        font-size: 14px;
        line-height: 20px;
        color: var(--secondary-text-color);
    }
`;

export const Title = styled.h3`
    font-size: 18px;
    line-height: 28px;
    color: var(--primary-text-color);
`;
