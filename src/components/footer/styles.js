import styled, { keyframes } from "styled-components";

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 150px;
  background-color: ${({theme}) => theme.colors.secondary};
  p {
    color: ${({theme}) => theme.colors.textDark};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export default {
  FooterSection,
}