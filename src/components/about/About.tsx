import Styled from "./styles";
import ProfileImage from "../../assets/profileImage.jpg";
import GraduateIcon from "../../assets/icons/GraduateIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import { Trans, useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Styled.AboutSection id="about">
      <Styled.AboutLeft>
        <img src={ProfileImage} alt="profile image" />
        <p>
          <GraduateIcon /> {t("whatIDo.education")}
        </p>
        <p>
          <LocationIcon /> {t("whatIDo.location")}
        </p>
      </Styled.AboutLeft>
      <Styled.AboutRight>
        <h2>{t("whatIDo.whatIDoLabel")}</h2>
        <p>{t("whatIDo.aboutTitle")}</p>
        <Styled.TerminalBox>
          <Styled.TerminalHead>
            <div></div>
            <div></div>
            <div></div>
          </Styled.TerminalHead>
          <Styled.TerminalContent
            len={t("whatIDo.whatIDoDescription").length - 26}
          >
            <p>root@10.0.0.1:~$</p>
            <span className="reveal typing">
              <Trans
                i18nKey={"whatIDo.whatIDoDescription"}
                components={{
                  1: <br></br>,
                }}
              />
            </span>
          </Styled.TerminalContent>
        </Styled.TerminalBox>
      </Styled.AboutRight>
    </Styled.AboutSection>
  );
};
export default About;
