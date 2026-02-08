import styled, { keyframes } from "styled-components";

interface IntroSocialIconProps {
  bgColor: string;
}

const floatingAnimation = keyframes`
    0% { transform: translate(0,  0px); } 
    30%  { transform: translate(0, 10px); } 
    90%   { transform: translate(0, -0px); }
`;

const sayHi = keyframes`
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(18.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate(-10.0deg) }
   30% { transform: rotate(18.0deg) }
   40% { transform: rotate(-8.0deg) }
   50% { transform: rotate(14.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
`;

const Intro = styled.div`
  padding: 80px 150px 0px 150px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    padding: 120px 15px 0px 15px;
  }
`;

const IntroMain = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 80px - 50px);
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: unset;
  }
`;

const IntroScroll = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  height: 50px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textDarkest};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    animation-name: ${floatingAnimation};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    img {
      margin-left: 5px;
    }
  }
`;

const IntroLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  .nameTitle {
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(
      0.25turn,
      rgba(255, 249, 34),
      rgba(255, 0, 128),
      rgba(56, 2, 155, 0)
    );
    border-image-slice: 1;
  }
  h1 {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    align-items: center;
    height: 66px;
    span {
      font-weight: 700 !important;
    }
    p {
      transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
      display: inline-block;
      width: 50px;
      height: 54px;
      font-size: ${({ theme }) => theme.fontSizes.large};
      animation: ${sayHi} 2.5s infinite;
    }
  }
  h2 {
    color: ${({ theme }) => theme.colors.textBlue};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 34px 0px;
  }
  p {
    color: ${({ theme }) => theme.colors.textDark};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media only screen and (max-width: 768px) {
    align-items: center;
    * {
      text-align: center;
    }
  }
`;

const IntroSocial = styled.ul`
  display: flex;
  margin-top: 30px;
`;

const IntroSocialIcon = styled.li<IntroSocialIconProps>`
  margin-right: 15px;
  text-decoration: none;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    width: 44px;
  }
  img {
    height: 30px;
    width: 30px;
  }
`;

const IntroRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 0px;
  }
`;

export default {
  Intro,
  IntroMain,
  IntroScroll,
  IntroLeft,
  IntroSocial,
  IntroSocialIcon,
  IntroRight,
};
