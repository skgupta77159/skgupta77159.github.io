import { useEffect, useState } from "react";
import Styled from "./styles";
import LanguageSelector from "../selector/LanguageSelector";
import { useTranslation } from "react-i18next";

interface TopbarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ toggleTheme, isDarkTheme }) => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false,
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { t } = useTranslation();

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <Styled.Topbar id="sticky-topbar">
      <Styled.TopbarLogo>
        <h1>
          <span>&lt;</span> Sushil Gupta <span>/&gt;</span>
        </h1>

        {isMobile && (
          <Styled.Hamburger
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            isMenuOpen={isMenuOpen}
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </Styled.Hamburger>
        )}
      </Styled.TopbarLogo>

      <Styled.TopbarMenu isMenuOpen={isMenuOpen}>
        <li>
          <a href="#">{t("menu.home")}</a>
        </li>
        <li>
          <a href="#about">{t("menu.about")}</a>
        </li>
        <li>
          <a href="#experiences">{t("menu.experiences")}</a>
        </li>
        <li>
          <a href="#projects">{t("menu.projects")}</a>
        </li>
        <li>
          <a href="#blogs">{t("menu.blogs")}</a>
        </li>
        <li>
          <a href="#achievements">{t("menu.achievements")}</a>
        </li>
        <li>
          <a href="#contacts">{t("menu.contacts")}</a>
        </li>

        <li onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              🌞
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              🌜
            </span>
          )}
        </li>
        <LanguageSelector />
      </Styled.TopbarMenu>
    </Styled.Topbar>
  );
};

export default Topbar;
