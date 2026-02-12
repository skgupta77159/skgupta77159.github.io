import Styled from "./styles";
import ProjCard from "./ProjCard";
import { useTranslation } from "react-i18next";

interface ProjectItem {
  name: string;
  image: string;
  type: string;
  techStack: string;
  sourceCode: string;
  demoLink: string;
  shortDescription: string;
}

interface ProjectSection {
  projectTitle: string;
  projects: ProjectItem[];
}
const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projectSection = t("project", {
    returnObjects: true,
  }) as ProjectSection;

  return (
    <Styled.ProjectSection id="projects">
      <Styled.ProjectHeading>
        {projectSection.projectTitle}
      </Styled.ProjectHeading>
      <Styled.ProjectContent className="reveal fade-up">
        {projectSection.projects.map((project, id) => {
          return <ProjCard key={id} project={project} />;
        })}
      </Styled.ProjectContent>
    </Styled.ProjectSection>
  );
};
export default Projects;
