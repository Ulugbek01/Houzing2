
import styled, { css } from "styled-components";

const flexBox = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;

`;

export const Hero = styled.div``;

Hero.ImgWrapper = styled.div`
  ${flexBox};
  justify-content: space-between;
  padding: 24px 0;
`;

Hero.ImgWrapper.Left = styled.div`
    width: 580px;
    height: 400px;

    img {
        width: 100%;
        height: 100%;
    }
`;

Hero.ImgWrapper.Right = styled.div`
  div .img {
    padding: 5px;
  }
`;

Hero.Info = styled.div``;
Hero.Info.Left = styled.div``;

Hero.Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

Hero.Info.Header = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 20px 0;
  .text {
    color: #696969;
  }

  .description {
    margin-top: 48px;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
  }
`;

Hero.Info.IconWrapper = styled.div`
  ${flexBox};
  justify-content: space-between;
  span {
    ${flexBox};
    .space {
      margin-right: 8px;
    }
  }

  span:not(:last-child) {
    margin-right: 16px;
  }
`;

export const IconWrapper = styled.div`
  ${flexBox};
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #f6f8f9;
  border-radius: 50%;
`;

Hero.Info.Header.Icons = styled.div`
  ${flexBox};
  margin-bottom: 20px;
  
`;

Hero.Info.Header.Icons.Share = styled.div`
  ${flexBox};
  margin-left: auto;
  cursor: pointer;
`;

Hero.Info.Header.Icons.Save = styled.div`
  ${flexBox};
  cursor: pointer;
`;

Hero.Info.Header.Price = styled.div`
  .month-price {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #0d263b;
  }

  .text {
    text-align: right;
   }

  .line-through {
    margin-right: 10px;
    text-decoration: line-through;
  }
`;

export const AsideCard = styled.div`
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  padding: 24px;
  input {
    border: none;
    border-bottom: 1px solid #e6e9ec;
  }
  input:focus {
    border: none;
    border-bottom: 1px solid #0d263b;
  }
`;

AsideCard.User = styled.div`
  ${flexBox};
  margin-bottom: 24px;
  .user-img {
    margin-right: 8px;
  }
  .user-name {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0d263b;
    margin-bottom: 0;
  }
  .tel {
    color: #696969;
  }
`;

export const SectionWrapper = styled.div`
    max-width: 880px;
    
.location-title, .details-title {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
}

  .location-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .details-title {
    margin-top: 48px;
  }

  .details-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;