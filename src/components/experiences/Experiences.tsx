import Styled from "./styles";
import ExpCard from "./ExpCard";
import { useTranslation } from "react-i18next";

export interface Career {
  role: string;
  duration: string;
  employmentType: string;
  fromDate: string;
  toDate: string;
  description: string[];
}

export interface Experience {
  companyName: string;
  location: string;
  logo: string;
  career: Career[];
}

export interface ExperienceSection {
  experienceTitle: string;
  experiences: Experience[];
}
const Experiences: React.FC = () => {
  const { t } = useTranslation();

  const experienceSection = t("experience", {
    returnObjects: true,
  }) as ExperienceSection;

  return (
    <Styled.ExpSection id="experiences">
      <Styled.ExpHeading>
        {experienceSection.experienceTitle}
      </Styled.ExpHeading>
      <Styled.ExpContent>
        {experienceSection.experiences.map((experience) => {
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
