import Styled from "./styles";
import { useTranslation } from "react-i18next";

interface SkillItem {
  id: string;
  name: string;
  badgeUrl: string;
}

interface SkillSection {
  skillsTitle: string;
  skills: SkillItem[];
}
const Skills: React.FC = () => {

  const { t } = useTranslation();
  const skillSection = t("skill", {
    returnObjects: true
  }) as SkillSection;

  return (
    <Styled.SkillsSection id="skills">
      <Styled.Heading>{skillSection.skillsTitle}</Styled.Heading>

      <Styled.SkillsWrapper>
        {skillSection.skills.map((skill) => (
          <Styled.SkillBadge
            key={skill.id}
            src={skill.badgeUrl}
            alt={skill.name}
            loading="lazy"
            className="reveal"
          />
        ))}
      </Styled.SkillsWrapper>
    </Styled.SkillsSection>
  );
};

export default Skills;
