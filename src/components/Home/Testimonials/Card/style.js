import styled from "styled-components";

export const CardContainer = styled.div`
    width: 380px;
    text-align: center;
    padding: 40px 48px 0;
    font-size: 16px;


    .name {
        margin-top: 16px;
        color: var(--primary-text-color);
    }

    .text, .status {
        line-height: 24px;
        color: var(--secondary-text-color);
    }
`;


