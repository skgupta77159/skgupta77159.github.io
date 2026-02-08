import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 50px 150px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  padding-bottom: 50px;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillBadge = styled.img`
  height: 32px;
  border-radius: 4px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

export default {
  SkillsSection,
  Heading,
  SkillsWrapper,
  SkillBadge,
};
