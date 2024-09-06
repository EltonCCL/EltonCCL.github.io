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
  // background-color: #;
  border-radius: 18px;
  padding: 24px 24px 12px 24px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  // box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;

const CompanyName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
  
`;

const JobTitle = styled.h4`
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  // color: #666;
  margin-bottom: 8px;
`;

const DateRange = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 4px;
  text-align: right;

  @media (max-width:768px) {
    text-align: left;
  }
`;

const DescriptionList = styled.ul`
  font-size: 16px;
  line-height: 1.5;
  padding-left: 40px;
`;

const DescriptionItem = styled.li`
  margin-bottom: 8px;
`;
const Separate = styled.div`
    border-bottom: 1px solid #a5a5a5;
    width: calc(100% - 48px);
    transform: translate(24px, -7px);
`;

function WorkExperience({ experiences }) {
  return (
    <ExperienceContainer>
      <ExperienceTitle>Work Experience</ExperienceTitle>
      {experiences.map((exp, index) => (
        <>
          <ExperienceCard key={index}>
            <div className='container-fluid'>
              <div class="row justify-content-between">
                <div class="col-md" style={{ padding: 0 }}>
                  <CompanyName>{exp.company}</CompanyName>
                  <JobTitle>{exp.title}</JobTitle>
                </div>
                <div class="col-md-4" style={{ padding: 0 }}>
                  <DateRange>{exp.startDate} - {exp.endDate}</DateRange>
                </div>
              </div>
            </div>
            <DescriptionList>
              {exp.description.map((item, itemIndex) => (
                <DescriptionItem key={itemIndex}>{item}</DescriptionItem>
              ))}
            </DescriptionList>
          </ExperienceCard>
          <Separate></Separate>
        </>

      ))}
    </ExperienceContainer >
  );
}

export default WorkExperience;