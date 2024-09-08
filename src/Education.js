import React from 'react';
import styled from 'styled-components';
import EducationData from './education.json';
const Container = styled.div`
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Card = styled.div`
  border-radius: 18px;
  padding: 0px 0px 16px 0px;
`;
const Separate = styled.div`
    border-bottom: 1px solid #a5a5a5;
    width: calc(100% - 0px);
    transform: translate(0px, -7px);
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
  margin-bottom: 0px;
`;
const DescriptionItem = styled.div`
  margin-bottom: 8px;
`;
function Education() {
  return (
    <Container>
      <Title>Education</Title>
      {EducationData.map((exp, index) => (
        <>
          <Card key={index}>
            <div className='container-fluid'>
              <div class="row justify-content-between">
                <Separate></Separate>
                <div class="col-md" style={{ padding: 0 }}>
                  <CompanyName>{exp.degree}</CompanyName>
                  <JobTitle>{exp.institute}</JobTitle>
                </div>
                <div class="col-md-4" style={{ padding: 0 }}>
                  <DateRange>{exp.startDate} - {exp.endDate}</DateRange>
                </div>
              </div>
            </div>
            <p></p>
            <DescriptionItem>GPA: {exp.gpa}</DescriptionItem>
          </Card>
        </>
      ))}
    </Container>
  );
}

export default Education;