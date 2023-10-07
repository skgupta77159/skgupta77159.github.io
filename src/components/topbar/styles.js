import styled from "styled-components";

const Topbar = styled.div`
    height: 80px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 0px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0px;
    width: 100%;
    box-sizing: border-box;
    transition: 0.5s;
    z-index: 999;

    @media only screen and (max-width: 768px) {
        padding: 0px 15px;
        flex-direction: column;
        align-items: flex-start;
        height: unset;
    }
`;

const TopbarLogo = styled.div`
    min-width: 250px;
    h1 {
        color: ${({ theme }) => theme.colors.textLight};
        text-align: center;
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: ${({ theme }) => theme.fontSizes.large};
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    span {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: ${({ theme }) => theme.fontSizes.large};
        color: ${({ theme }) => theme.colors.gradient};
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const TopbarMenu = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    
    * {
        text-decoration: none;
        outline: none;
        border: none;
        color: ${({ theme }) => theme.colors.textLight};
        margin-left: 15px;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
    }
    span {
        font-size: 26px;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        transition: height 0.5s;
        height: ${({isMenuOpen}) => isMenuOpen ? "370px" : "0px"};
        overflow-y: hidden;
        background-color: ${({ theme }) => theme.colors.secondary};
        margin-top: 10px;
        border-radius: 15px;
        flex-wrap: nowrap;
        justify-content: unset;
        
        * {
            padding: 10px;
            overflow-y: hidden;
        }
    }
`;

const Hamburger = styled.div`
    display: inline-block;
    cursor: pointer;

    .bar1, .bar2, .bar3 {
        width: 24px;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.textLight};
        margin: 6px 0;
        transition: 0.4s;
        border-radius: 2px;
    }

    ${({isMenuOpen}) => isMenuOpen && `
        .bar1 {
            transform: translate(0, 8px) rotate(-45deg);
        }
        .bar2 { opacity: 0; }
        .bar3 {
            transform: translate(0, -8px) rotate(45deg);
        }
    `}
`;

export default {
    Topbar,
    TopbarLogo,
    TopbarMenu,
    Hamburger,
}