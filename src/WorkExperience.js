import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  margin: 40px 0;
`;

const ExperienceTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ExperienceCard = styled.div`
  background-color: #f5f5f7;
  border-radius: 18px;
  padding: 30px;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

const CompanyName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const JobTitle = styled.h4`
  font-size: 20px;
  font-weight: 500;
  color: #666;
  margin-bottom: 10px;
`;

const DateRange = styled.p`
  font-size: 16px;
  color: #888;
  margin-bottom: 15px;
`;

const DescriptionList = styled.ul`
  font-size: 18px;
  line-height: 1.5;
  padding-left: 20px;
`;

const DescriptionItem = styled.li`
  margin-bottom: 8px;
`;

function WorkExperience({ experiences }) {
  return (
    <ExperienceContainer>
      <ExperienceTitle>Work Experience</ExperienceTitle>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index}>
          <CompanyName>{exp.company}</CompanyName>
          <JobTitle>{exp.title}</JobTitle>
          <DateRange>{exp.startDate} - {exp.endDate}</DateRange>
          <DescriptionList>
            {exp.description.map((item, itemIndex) => (
              <DescriptionItem key={itemIndex}>{item}</DescriptionItem>
            ))}
          </DescriptionList>
        </ExperienceCard>
      ))}
    </ExperienceContainer>
  );
}

export default WorkExperience;