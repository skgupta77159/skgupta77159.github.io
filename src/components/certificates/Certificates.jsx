import Styled from './styles'
import { certificates } from '../../userData'

const Certificates = () => {

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return (
        <Styled.CertSection id="achievements">
            <Styled.CertHeading>Achievements And Certifications 🏆</Styled.CertHeading>
            <Styled.CertContent>
                {
                    certificates.map((certificate, id) => {
                        return (
                            <Styled.CertImage className='reveal' wid={window.innerWidth} key={id} tilt={randomIntFromInterval(-10, 10)} src={certificate.image} alt={certificate.title} />
                        )
                    })
                }
            </Styled.CertContent>
        </Styled.CertSection>
    )
}
export default Certificates;