import GithubIcon from '../../assets/icons/GithubIcon';
import LiveIcon from '../../assets/icons/LiveIcon';
import Styled from './styles'

const ProjCard = (props) => {
    const { name, image, type, techStack, sourceCode, demoLink, shortDescription } = props.project;
    return (
        <Styled.ProjCard>
            <img src={image} alt="project image" />
            <Styled.ProjDetails>
                <Styled.ProjCol>
                    <Styled.ProjRow>
                        <Styled.ProjColLeft>
                            <h4>{name} &nbsp; • &nbsp; {type}</h4>
                            <p>{techStack.replace(/ /g, " | ")}</p>
                        </Styled.ProjColLeft>
                        <Styled.ProjColRight>
                            <span><a href={sourceCode} target="_blank"><GithubIcon/>Source Code</a></span>
                            <span><a href={demoLink} target="_blank"><LiveIcon/>Live Demo</a></span>
                        </Styled.ProjColRight>
                    </Styled.ProjRow>
                    <p>{shortDescription}</p>
                </Styled.ProjCol>
            </Styled.ProjDetails>
        </Styled.ProjCard>
    )
}
export default ProjCard;