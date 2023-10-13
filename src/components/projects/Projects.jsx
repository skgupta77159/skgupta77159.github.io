import Styled from './styles'
import { projects } from '../../userData'
import ProjCard from './ProjCard'

const Projects = () => {
    return (
        <Styled.ProjectSection id="projects">
            <Styled.ProjectHeading>Projects</Styled.ProjectHeading>
            <Styled.ProjectContent className='reveal fade-up'>
                {
                    projects.map((project, id) => {
                        return (
                            <ProjCard key={id} project={project}/>
                        )
                    })
                }
            </Styled.ProjectContent>
        </Styled.ProjectSection>
    )
}
export default Projects;