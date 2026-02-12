import React, { useState } from "react";
import Styled from "./styles";
import { useTranslation } from "react-i18next";

interface CertificatesItem {
  title: string;
  image: string;
}

interface CertificateSection {
  certificateTitle: string;
  certificates: CertificatesItem[];
}

const Certificates: React.FC = () => {
  const { t } = useTranslation();
  const certificateSection = t("certificate", {
    returnObjects: true,
  }) as CertificateSection;

  const [tilts] = useState<number[]>(() =>
    certificateSection.certificates.map(() =>
      Math.floor(Math.random() * 21 - 10),
    ),
  );

  return (
    <Styled.CertSection id="achievements">
      <Styled.CertHeading>
        {certificateSection.certificateTitle}
      </Styled.CertHeading>

      <Styled.CertContent>
        {certificateSection.certificates.map(
          (certificate: CertificatesItem, index: number) => (
            <Styled.CertImage
              key={certificate.title}
              className="reveal"
              wid={typeof window !== "undefined" ? window.innerWidth : 0}
              tilt={tilts[index]}
              src={certificate.image}
              alt={certificate.title}
            />
          ),
        )}
      </Styled.CertContent>
    </Styled.CertSection>
  );
};

export default Certificates;
