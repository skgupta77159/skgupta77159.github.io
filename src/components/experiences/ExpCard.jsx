import LocOutlinedIcon from '../../assets/icons/LocOutlinedIcon';
import Styled from './styles'

const ExpCard = (props) => {
    const { logo, companyName, location, career } = props.experience;
    return (
        <Styled.ExpCard className='reveal fade-left'>
            <Styled.ExpHeader>
                <img src={logo} alt="company logo"/>
                <Styled.CompanyHeader>
                    <h3>{companyName}</h3>
                    <p><LocOutlinedIcon/> {location}</p>
                </Styled.CompanyHeader>
            </Styled.ExpHeader>
            {
                career.map((exp) => {
                    return (
                        <Styled.CareRow>
                            <Styled.DurColumn>
                                <span>{exp.duration}</span>
                            </Styled.DurColumn>
                            <Styled.JourColumn>
                                <div></div>
                                <div></div>
                            </Styled.JourColumn>
                            <Styled.CareContent>
                                <h3>{exp.role}</h3>
                                <h4>{exp.employmentType} &nbsp; | &nbsp; {exp.fromDate} - {exp.toDate}</h4>
                                {
                                    exp.description.map((desc) => {
                                        return <p>• {desc}</p>
                                    })
                                }
                            </Styled.CareContent>
                        </Styled.CareRow>
                    )
                })
            }
        </Styled.ExpCard>
    )
}
export default ExpCard;