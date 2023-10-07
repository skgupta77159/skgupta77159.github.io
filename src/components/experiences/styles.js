import styled, { keyframes } from "styled-components";

const fadeLeft = keyframes`
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
`

const ExpSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0px;
    @media only screen and (max-width: 768px) {
        padding: 30px 0px;
    }
`;

const ExpHeading = styled.h2`
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 0px 150px 50px 150px;
    @media only screen and (max-width: 768px) {
        padding: 0px 15px 40px 15px;
    }
`;

const ExpContent = styled.div`
    .active {
        opacity: 1;
    }
    .active.fade-left {
        animation: ${fadeLeft} 1s ease-in;
    }
`;

const ExpCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 45px;
    padding: 0px 150px;
    opacity: 0;
    @media only screen and (max-width: 768px) {
        padding: 0px 15px;
    }
`;

const ExpHeader = styled.div`
    display: flex;
    img {
        height: 76px;
        width: 76px;
        min-height: 76px;
        min-width: 76px;
        border-radius: 50%;
        margin-right: 30px;
        object-fit: cover;
    }
    h3 {
        color: ${({ theme }) => theme.colors.textLight};
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    p {
        color: ${({ theme }) => theme.colors.textDarkest};
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 6px 0px;
    }
    @media only screen and (max-width: 768px) {
        padding-bottom: 10px;
        img {
            height: 56px;
            width: 56px;
            min-height: 56px;
            min-width: 56px;
            margin-right: 10px;
        }
        h3 {
            font-size: 22px;
        }
    }
`;

const CompanyHeader = styled.div`
    p {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.textDarkest};
        svg {
            height: 20px;
            width: 20px;
            margin-right: 5px;
            path {
                fill: ${({ theme }) => theme.colors.textDarkest};
            }
        }
    }
`;

const CareRow = styled.div`
    display: flex;
`;

const DurColumn = styled.div`
    width: 106px;
    min-width: 106px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span {
        color: ${({ theme }) => theme.colors.textDarkest}90;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const JourColumn = styled.div`
    width: 12px;
    min-width: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    :nth-child(1){
        height: 12px;
        width: 12px;
        min-height: 12px;
        min-width: 12px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.textDarkest};
    }
    :nth-child(2){
        height: 100%;
        width: 2.5px;
        background-color: ${({ theme }) => theme.colors.textDarkest}90;
    }
`;

const CareContent = styled.div`
    padding-left: 12px;
    padding-bottom: 20px;
    h3 {
        color: ${({ theme }) => theme.colors.textDark};
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin: 0px;
        padding: 0px;
        margin-bottom: 5px;
    }
    h4{
        color: ${({ theme }) => theme.colors.textDark};
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin-bottom: 8px;
    }
    p{
        color: ${({ theme }) => theme.colors.textDarkest};
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 5px;
    }
`;

export default {
    ExpSection,
    ExpHeading,
    ExpContent,
    ExpCard,
    ExpHeader,
    CompanyHeader,
    CareRow,
    DurColumn,
    JourColumn,
    CareContent,
}