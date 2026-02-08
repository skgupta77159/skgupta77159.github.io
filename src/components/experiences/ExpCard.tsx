import React from "react";
import LocOutlinedIcon from "../../assets/icons/LocOutlinedIcon";
import Styled from "./styles";

/* 🔹 Types */
interface CareerItem {
  role: string;
  duration: string;
  employmentType: string;
  fromDate: string;
  toDate: string;
  description: string[];
}

interface Experience {
  logo: string;
  companyName: string;
  location: string;
  career: CareerItem[];
}

interface ExpCardProps {
  experience: Experience;
}

const ExpCard: React.FC<ExpCardProps> = ({ experience }) => {
  const { logo, companyName, location, career } = experience;

  return (
    <Styled.ExpCard className="reveal fade-left">
      <Styled.ExpHeader>
        <img src={logo} alt="company logo" />

        <Styled.CompanyHeader>
          <h3>{companyName}</h3>
          <p>
            <LocOutlinedIcon /> {location}
          </p>
        </Styled.CompanyHeader>
      </Styled.ExpHeader>

      {career.map((exp, idx) => (
        <Styled.CareRow key={`${exp.role}-${idx}`}>
          <Styled.DurColumn>
            <span>{exp.duration}</span>
          </Styled.DurColumn>

          <Styled.JourColumn>
            <div />
            <div />
          </Styled.JourColumn>

          <Styled.CareContent>
            <h3>{exp.role}</h3>
            <h4>
              {exp.employmentType} &nbsp; | &nbsp;
              {exp.fromDate} - {exp.toDate}
            </h4>

            {exp.description.map((desc, i) => (
              <p key={i}>• {desc}</p>
            ))}
          </Styled.CareContent>
        </Styled.CareRow>
      ))}
    </Styled.ExpCard>
  );
};

export default ExpCard;
