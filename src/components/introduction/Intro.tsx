import Styled from "./styles";
import Image from "../../assets/manOnTable.svg";
import ArrowDown from "../../assets/arrowDown.svg";
import { intro, socialIcons } from "../../data/userData";

interface SocialIcon {
  id: string;
  name: string;
  color: string;
  image: string;
  link: string;
}
const Intro: React.FC = () => {
  return (
    <Styled.Intro>
      <Styled.IntroMain>
        <Styled.IntroLeft>
          <h1>
            Hi all <p>👋</p>
          </h1>
          <h1 className="nameTitle">
            I’m&nbsp;<span>{intro.name}</span> 👨‍💻
          </h1>
          <h2>{intro.shortTitle}</h2>
          <p>{intro.description}</p>
          <Styled.IntroSocial>
            {socialIcons.map((item: SocialIcon) => {
              return (
                <Styled.IntroSocialIcon key={item.id} bgColor={item.color}>
                  <a href={item.link} target="_blank">
                    <img src={item.image} alt={item.id} />
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
          Scroll Down <img src={ArrowDown} alt="scroll down" />
        </button>
      </Styled.IntroScroll>
    </Styled.Intro>
  );
};
export default Intro;
