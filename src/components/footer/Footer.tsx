import { useTranslation } from "react-i18next";
import Styled from "./styles";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Styled.FooterSection>
      <p>{t("footer.credit")}</p>
    </Styled.FooterSection>
  );
};
export default Footer;
