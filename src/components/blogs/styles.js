import styled, { keyframes } from "styled-components";

const BlogSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 150px;

    @media only screen and (max-width: 768px) {
        padding: 30px 15px;
    }
`;

const BlogHeading = styled.h2`
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 50px;
    @media only screen and (max-width: 768px) {
      padding-bottom: 30px;
    }
`;

const BlogContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BlogCard = styled.a`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 14px;
  padding: 40px;
  margin-bottom: 22px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;

  h3 {
    color: ${({ theme }) => theme.colors.textDark};
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 14px;
    display: -webkit-box;
    overflow : hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; 
  }
  p {
    color: ${({ theme }) => theme.colors.textDarkest};
    font-size: 18px;
    display: -webkit-box;
    overflow : hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; 

  }

  svg {
    fill: ${({ theme }) => theme.colors.textDark};
    position: absolute;
    top: 8px;
    right: 8px;
    transform: rotate(-30deg);
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: ${({ theme }) => theme.colors.cardHoverBg};
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.4s ease-out;
    -webkit-box-shadow: -8px 7px 26px 22px ${({ theme }) => theme.colors.cardHoverBg};
    -moz-box-shadow: -8px 7px 26px 22px ${({ theme }) => theme.colors.cardHoverBg};
    box-shadow: -8px 7px 26px 22px ${({ theme }) => theme.colors.cardHoverBg};
  }
  &:hover::before {
    transform: scale(16);
  }

  @media only screen and (max-width: 768px) {
    padding: 20px 14px; 
    h3 {
      font-size: 22px;
    }
    p{
      font-size: 16px;
    }
    svg {
      fill: ${({ theme }) => theme.colors.textDark};
      position: absolute;
      top: 4px;
      right: 4px;
      transform: rotate(-30deg);
    }
    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: -16px;
      right: -16px;
      background: ${({ theme }) => theme.colors.cardHoverBg};
      height: 32px;
      width: 32px;
      border-radius: 32px;
      transform: scale(1);
      transform-origin: 50% 50%;
      transition: transform 0.4s ease-out;
      -webkit-box-shadow: -8px 7px 26px 22px ${({ theme }) => theme.colors.cardHoverBg};
      -moz-box-shadow: -8px 7px 26px 22px ${({ theme }) => theme.colors.cardHoverBg};
      box-shadow: -8px 7px 26px 22px ${({ theme }) => theme.colors.cardHoverBg};
    }
    &:hover::before {
      transform: scale(5);
    }
  }
`;

export default {
    BlogSection,
    BlogHeading,
    BlogContent,
    BlogCard,
}