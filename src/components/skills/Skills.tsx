import Styled from "./styles";
import { skills } from "../../data/userData";

const Skills: React.FC = () => {
  return (
    <Styled.SkillsSection id="skills">
      <Styled.Heading>Tech Stack 💻</Styled.Heading>

      <Styled.SkillsWrapper>
        {skills.map((skill) => (
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
