import { useTranslation } from "react-i18next";
import Styled from "./styles";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Styled.ContactSection id="contacts">
      <Styled.ContactContent>
        <h2>{t("contact.title")}</h2>
        <h3>{t("contact.subtitle")}</h3>
        <p>{t("contact.thankYouMessage")}</p>
      </Styled.ContactContent>
    </Styled.ContactSection>
  );
};
export default Contact;
