import Styled from './styles'
import { experiences } from '../../userData'
import ExpCard from './ExpCard'

const Experiences = () => {
    return (
        <Styled.ExpSection id="experiences">
            <Styled.ExpHeading>Professional Experiences</Styled.ExpHeading>
            <Styled.ExpContent>
                {
                    experiences.map((experience, id) => {
                        return (
                            <ExpCard key={id} experience={experience}/>
                        )
                    })
                }
            </Styled.ExpContent>
        </Styled.ExpSection>
    )
}
export default Experiences;