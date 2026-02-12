import styled, { css, keyframes } from "styled-components";

interface TerminalContentProps {
    len: number;
}

const blink = keyframes`
  50% {background-position:0 -100%,0 0}
`;

const textAnimation = keyframes`
  from {background-size:0 200%}
`;

const AboutSection = styled.div`
    display: flex;
    padding: 50px 150px;
    @media only screen and (max-width: 768px) {
        padding: 15px;
        flex-direction: column;
    }
`;

const AboutLeft = styled.div`
    display: flex;
    flex: 0.4;
    flex-direction: column;
    align-items: center;
    img {
        height: 350px;
        width: 350px;
        border-radius: 50%;
        margin-bottom: 18px;
    }
    p{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        svg {
            margin-right: 5px;
        }
    }
    :nth-child(2) {
        color: ${({ theme }) => theme.colors.textBlue};
        margin-bottom: 10px;
    }
    :nth-child(3) {
        color: ${({ theme }) => theme.colors.textDark};
    }

    @media only screen and (max-width: 768px) {
        img {
            height: 250px;
            width: 250px;
        }
    }
`;

const AboutRight = styled.div`
    display: flex;
    flex: 0.6;
    flex-direction: column;
    padding: 0px 20px 20px 40px;
    h2 {
        color: ${({ theme }) => theme.colors.textLight};
        font-size: ${({ theme }) => theme.fontSizes.large};
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    p {
        color: ${({ theme }) => theme.colors.textLight};
        font-size: ${({ theme }) => theme.fontSizes.small};
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 14px 0px;
    }
    @media only screen and (max-width: 768px) {
        padding: 0px;
        h2 {
            margin-top: 20px;
        }
    }
`;

const TerminalBox = styled.div`
    min-height: 350px;
    background-color: #000000;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.75);
    margin-top: 10px;
`;

const TerminalHead = styled.div`
    height: 22px;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    align-items: center;
    padding-left: 6px;
    div {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        margin-left: 6px;
    }
    div:nth-child(1) {
        background-color: #FF605C;
    }
    div:nth-child(2) {
        background-color: #FFBD44;
    }
    div:nth-child(3) {
        background-color: #00CA4E;
    }
`;

const TerminalContent = styled.div<TerminalContentProps>`
    padding: 0px 10px;
    p, span{
        font-family: monospace;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    :nth-child(1) {
        color: #C2C8CC;
    }
    .active.typing {
        color: #0000;
        background: linear-gradient(-90deg, #C2C8CC 2px, transparent 0) 5px 0, linear-gradient(#C2C8CC 0 0) 0 0;
        -webkit-background-clip: padding-box, text;
        background-clip: padding-box, text;
        background-repeat: no-repeat;

        ${({ len }) => len && css`
            background-size: calc(${len} * 1ch) 200%;
            animation: ${blink} .7s infinite steps(1), ${textAnimation} calc(${len} * .03s) steps(${len}) forwards;
        `}
    }
`;

export default {
    AboutSection,
    AboutLeft,
    AboutRight,
    TerminalBox,
    TerminalHead,
    TerminalContent,
}