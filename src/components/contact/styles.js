import styled, { keyframes } from "styled-components";

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px 150px 100px 150px;
    background-color: ${({theme}) => theme.colors.secondary};

    @media only screen and (max-width: 768px) {
      padding: 30px 15px;
    }
`;

const ContactHeading = styled.h2`
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const ContactContent = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h3 {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 30px 0px;
  }
  p {
    color: ${({ theme }) => theme.colors.textDark};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default {
    ContactSection,
    ContactHeading,
    ContactContent,
}