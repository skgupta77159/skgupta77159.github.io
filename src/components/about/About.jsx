import Styled from './styles'
import ProfileImage from '../../assets/profileImage.jpg'
import GraduateIcon from '../../assets/icons/GraduateIcon';
import LocationIcon from '../../assets/icons/LocationIcon';
import { whatIDo } from '../../userData'
import parse from 'html-react-parser';

const About = () => {
    return (
        <Styled.AboutSection id="about">
            <Styled.AboutLeft>
                <img src={ProfileImage} alt="profile image"/>
                <p><GraduateIcon/> {whatIDo.education}</p>
                <p><LocationIcon/> {whatIDo.location}</p>
            </Styled.AboutLeft>
            <Styled.AboutRight>
                <h2>What I do </h2>
                <p>{whatIDo.aboutTitle}</p>
                <Styled.TerminalBox>
                    <Styled.TerminalHead>
                        <div></div>
                        <div></div>
                        <div></div>
                    </Styled.TerminalHead>
                    <Styled.TerminalContent len={whatIDo.whatIDoDescription.length - 26}>
                        <p>root@10.0.0.1:~$</p>
                        <span className='reveal typing'>{parse(whatIDo.whatIDoDescription)}</span>
                    </Styled.TerminalContent>
                </Styled.TerminalBox>
            </Styled.AboutRight>
        </Styled.AboutSection>
    )
}
export default About;