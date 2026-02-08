import React, { useState } from "react";
import Styled from "./styles";
import { certificates } from "../../data/userData";

interface Certificate {
  title: string;
  image: string;
}

const Certificates: React.FC = () => {
  const [tilts] = useState<number[]>(() =>
    certificates.map(() => Math.floor(Math.random() * 21 - 10)),
  );

  return (
    <Styled.CertSection id="achievements">
      <Styled.CertHeading>
        Achievements And Certifications 🏆
      </Styled.CertHeading>

      <Styled.CertContent>
        {certificates.map((certificate: Certificate, index: number) => (
          <Styled.CertImage
            key={certificate.title}
            className="reveal"
            wid={typeof window !== "undefined" ? window.innerWidth : 0}
            tilt={tilts[index]}
            src={certificate.image}
            alt={certificate.title}
          />
        ))}
      </Styled.CertContent>
    </Styled.CertSection>
  );
};

export default Certificates;
