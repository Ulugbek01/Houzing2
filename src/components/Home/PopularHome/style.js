import styled from "styled-components";
import img from '../../../assets/images/popular-home-img.jpg';

export const Section = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    min-height: 571px;
    color: #fff;
    text-align: center;
`;

export const Title = styled.h2`
    max-width: 567px;
    margin-bottom: 48px;
    color: #fff;
`;