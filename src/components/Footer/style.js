import styled from "styled-components";
import { ReactComponent as logoIcon } from "../../assets/icons/logo.svg";

export const MainFooter = styled.div`
  background-color: #0d263b;
  margin-top: 96px;
  padding-top: 48px;
  color: var(--text-white);
`;

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

MainFooter.Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

MainFooter.Title = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
  color: var(--text-white);
`;

MainFooter.Ul = styled.ul``;

MainFooter.Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
  color: var();
  & > a {
    color: #fff;
    margin-left: 20px;
  }
  .space {
    margin-right: 20px;
  }
  .footer-item {
    position: relative;
    margin: 0;
    cursor: pointer;
  }
  .footer-item::after {
    content: "";
    width: 0;
    height: 2px;
    background: #fff;
    position: absolute;
    transition: 0.37s all ease-in-out;
    left: 0;
    bottom: -2px;
  }
  .footer-item:hover::after {
    content: "";
    width: 100%;
    height: 2px;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: -2px;
  }
`;

MainFooter.Contact = styled.div``;
MainFooter.Discover = styled.div``;
MainFooter.Category = styled.div``;

MainFooter.SocialNetwork = styled.ul`
  display: flex;
  align-items: center;
`;

MainFooter.SocialNetwork.Li = styled.li``;

MainFooter.IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 3px;
  margin-right: 8px;
  :hover {
    background-color: #466885;
  }
`;

MainFooter.Line = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`;

MainFooter.Bottom = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

Logo.Icon = styled(logoIcon)`

`;

MainFooter.Description = styled.div`
  font-size: 14px;
  margin-left: auto;
  margin-right: 73px;
`;

MainFooter.ArrowTopBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: #0061df;
  border-radius: 3px;
  cursor: pointer;
  position: ${({scroll}) => scroll > 100 ? 'fixed' : 'static'};
  right: 50px;
  bottom: 15px;
  z-index: 99;
  animation: anim 0.3s alternate ease-in-out infinite;

  @keyframes anim {
    from {
      transform: scale(0.9);
    } 
    to {
      transform: scale(1);
    }   
  }
`;

