import styled from "styled-components";

export const CardContainer = styled.div`
    width: 380px;
    text-align: center;


    .name {
        margin-top: 16px;
        color: var(--primary-text-color);
    }

    .text, .status {
        line-height: 24px;
        color: var(--secondary-text-color);
    }
`;

