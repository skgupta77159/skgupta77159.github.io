import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
    0% {
        transform: translateY(50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`

const ProjectSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 150px;
    overflow-y: hidden;
    .active.fade-up {
        animation: ${fadeUp} 1s ease-in;
    }
    background-color: ${({ theme }) => theme.colors.secondary};

    @media only screen and (max-width: 768px) {
        padding: 30px 15px;
    }
`;

const ProjectHeading = styled.h2`
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 50px;

    @media only screen and (max-width: 768px) {
        padding-bottom: 40px;
    }
`;

const ProjectContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`;

const ProjCard = styled.div`
    height: 340px;
    width: 550px;
    position: relative;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 10px 10px 30px 10px;
    border-radius: 10px;
    box-shadow: 0 3px 9px 2px rgba(0,0,0,.52);
    -webkit-box-shadow: 0 3px 9px 2px rgba(0,0,0,.52);
    -moz-box-shadow: 0 3px 9px 2px rgba(0,0,0,.52);
    img {
        width: 100%;
    }

    @media only screen and (max-width: 768px) {
        height: 240px;
        margin: 10px 8px 30px 8px;
    }
`;

const ProjDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(180deg, rgba(28, 35, 51, 0.00) 0%, ${({ theme }) => theme.colors.primary} 59.31%);
    padding: 100px 16px 10px;
    box-sizing: border-box;
`;

const ProjCol = styled.div`
    display: flex;
    flex-direction: column;
    p{
        color: ${({ theme }) => theme.colors.textDark};
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

const ProjRow = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const ProjColLeft = styled.div`
    display: flex;
    flex-direction: column;
    h4 {
        color: ${({ theme }) => theme.colors.textBlue};
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    p{
        color: ${({ theme }) => theme.colors.textDark};
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding: 5px 0px;
    }
`;

const ProjColRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 5px;
    span {
        a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.textBlue};
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            cursor: pointer;
            display: flex;
            align-items: center;
            svg {
                margin-right: 7px;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        flex-direction: row;
    }
`;

export default {
    ProjectSection,
    ProjectHeading,
    ProjectContent,
    ProjCard,
    ProjDetails,
    ProjCol,
    ProjRow,
    ProjColLeft,
    ProjColRight,
}