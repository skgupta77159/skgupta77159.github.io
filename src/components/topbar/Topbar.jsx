import { useEffect, useState } from 'react'
import Styled from './styles'

const Topbar = (props) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Set a default value for the initial window width
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to update the isMobile state based on the window width
    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        // Add an event listener to check for window width changes
        window.addEventListener('resize', checkIsMobile);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <Styled.Topbar id="sticky-topbar">
            <Styled.TopbarLogo>
                <h1><span>&lt;</span> Sushil Gupta <span>/&gt;</span></h1>
                {
                    isMobile ?
                        <Styled.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen}>
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </Styled.Hamburger>
                        : null
                }
            </Styled.TopbarLogo>
            <Styled.TopbarMenu isMenuOpen={isMenuOpen}>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><a href="#contact">Contact</a></li>
                <li onClick={props.toggleTheme}>{props.isDarkTheme ? <span aria-label="Light mode" role="img">🌞</span> :
                    <span aria-label="Dark mode" role="img">🌜</span>}</li>
            </Styled.TopbarMenu>
        </Styled.Topbar>
    )
}
export default Topbar;
