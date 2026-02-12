import Styled from "./styles";
import Image from "../../assets/manOnTable.svg";
import ArrowDown from "../../assets/arrowDown.svg";
import { Trans, useTranslation } from "react-i18next";
import GithubIcon from "../../assets/social/GitHub.svg";
import LinkedinIcon from "../../assets/social/LinkedIn.svg";
import MediumIcon from "../../assets/social/Medium.svg";
import FacebookIcon from "../../assets/social/Facebook.svg";

type SocialIconKey =
  | "GithubIcon"
  | "LinkedinIcon"
  | "MediumIcon"
  | "FacebookIcon";

interface SocialIcon {
  id: string;
  name: string;
  color: string;
  image: SocialIconKey;
  link: string;
}

const Intro: React.FC = () => {
  const { t } = useTranslation();
  const socialIcons = t("socialIcons", {
    returnObjects: true,
  }) as SocialIcon[];

  const iconMap: Record<SocialIconKey, string> = {
    GithubIcon,
    LinkedinIcon,
    MediumIcon,
    FacebookIcon,
  };

  return (
    <Styled.Intro>
      <Styled.IntroMain>
        <Styled.IntroLeft>
          <h1>
            <Trans
              i18nKey={"intro.greet"}
              components={{
                1: <p></p>,
              }}
            />
          </h1>
          <h1 className="nameTitle">
            {t("intro.namePrefix")}&nbsp;
            <span>{t("intro.name")}</span> 👨‍💻
          </h1>
          <h2>{t("intro.shortTitle")}</h2>
          <p>{t("intro.description")}</p>
          <Styled.IntroSocial>
            {socialIcons.map((item: SocialIcon) => {
              return (
                <Styled.IntroSocialIcon key={item.id} bgColor={item.color}>
                  <a href={item.link} target="_blank">
                    <img src={iconMap[item.image]} alt={item.id} />
                  </a>
                </Styled.IntroSocialIcon>
              );
            })}
          </Styled.IntroSocial>
        </Styled.IntroLeft>
        <Styled.IntroRight>
          <img src={Image} alt="developer svg" />
        </Styled.IntroRight>
      </Styled.IntroMain>
      <Styled.IntroScroll>
        <button>
          {t("intro.scroll")} <img src={ArrowDown} alt="scroll down" />
        </button>
      </Styled.IntroScroll>
    </Styled.Intro>
  );
};
export default Intro;
