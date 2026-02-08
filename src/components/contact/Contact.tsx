import Styled from "./styles";

const Contact: React.FC = () => {
  return (
    <Styled.ContactSection id="contacts">
      {/* <Styled.ContactHeading>Contact</Styled.ContactHeading> */}
      <Styled.ContactContent>
        <h2>Reach out to me!</h2>
        <h3>DISCUSS A PROJECT OR JUST WANT TO SAY HI? I AM OPEN FOR ALL</h3>
        <p>
          "Thank you for your time! Have a Great Day, Connect with me on
          LinkedIn"
        </p>
      </Styled.ContactContent>
    </Styled.ContactSection>
  );
};
export default Contact;
