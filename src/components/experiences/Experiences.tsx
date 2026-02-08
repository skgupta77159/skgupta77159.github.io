import Styled from "./styles";
import { experiences } from "../../data/userData";
import ExpCard from "./ExpCard";

const Experiences: React.FC = () => {
  return (
    <Styled.ExpSection id="experiences">
      <Styled.ExpHeading>Professional Experiences 👨🏻‍💻</Styled.ExpHeading>
      <Styled.ExpContent>
        {experiences.map((experience) => {
          return (
            <ExpCard
              key={`${experience.companyName}-${experience.location}`}
              experience={experience}
            />
          );
        })}
      </Styled.ExpContent>
    </Styled.ExpSection>
  );
};
export default Experiences;
