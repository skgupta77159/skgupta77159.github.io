import { useTranslation } from "react-i18next";
import GithubIcon from "../../assets/icons/GithubIcon";
import LiveIcon from "../../assets/icons/LiveIcon";
import Styled from "./styles";

interface ProjectItem {
  name: string;
  image: string;
  type: string;
  techStack: string;
  sourceCode: string;
  demoLink: string;
  shortDescription: string;
}

interface ProjCardProps {
  project: ProjectItem;
}
const ProjCard: React.FC<ProjCardProps> = ({ project }) => {
  const {
    name,
    image,
    type,
    techStack,
    sourceCode,
    demoLink,
    shortDescription,
  } = project;

  const { t } = useTranslation();

  return (
    <Styled.ProjCard>
      <img src={image} alt="project image" />
      <Styled.ProjDetails>
        <Styled.ProjCol>
          <Styled.ProjRow>
            <Styled.ProjColLeft>
              <h4>
                {name} &nbsp; • &nbsp; {type}
              </h4>
              <p>{techStack.replace(/ /g, " | ")}</p>
            </Styled.ProjColLeft>
            <Styled.ProjColRight>
              <span>
                <a href={sourceCode} target="_blank">
                  <GithubIcon />
                  {t("project.sourceCodeLabel")}
                </a>
              </span>
              <span>
                <a href={demoLink} target="_blank">
                  <LiveIcon />
                  {t("project.liveDemoLabel")}
                </a>
              </span>
            </Styled.ProjColRight>
          </Styled.ProjRow>
          <p>{shortDescription}</p>
        </Styled.ProjCol>
      </Styled.ProjDetails>
    </Styled.ProjCard>
  );
};
export default ProjCard;
