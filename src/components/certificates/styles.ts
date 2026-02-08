import styled, { keyframes } from "styled-components";

interface CertImageProps {
  wid: number;
  tilt: number;
}

const rotateAnimation = (tilt: number) => keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(${tilt}deg);
  }
`;

const CertSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 150px;

  @media only screen and (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const CertHeading = styled.h2`
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

const CertContent = styled.div`
  padding: 50px;

  @media only screen and (max-width: 768px) {
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const CertImage = styled.img<CertImageProps>`
  width: calc((${({ wid }) => wid}px - 220px * 2) / 2);
  transform: rotate(${({ tilt }) => tilt}deg);
  box-shadow: 0 3px 9px 2px rgba(0, 0, 0, 0.52);
  -webkit-box-shadow: 0 3px 9px 2px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 0 3px 9px 2px rgba(0, 0, 0, 0.52);
  &.active {
    animation: ${({ tilt }) => rotateAnimation(tilt)} 1s ease-in;
  }

  @media only screen and (max-width: 768px) {
    width: calc(${({ wid }) => wid}px - 70px);
  }
`;

export default {
  CertSection,
  CertHeading,
  CertContent,
  CertImage,
};
