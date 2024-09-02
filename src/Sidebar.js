import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f5f5f7;
  border-radius: 18px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 20px;
  display: block;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

const SkillItem = styled.li`
  font-size: 16px;
  margin-bottom: 5px;
`;

const LanguageItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 5px;
`;

const ProgressBar = styled.div`
  width: 100px;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => props.proficiency}%;
  height: 100%;
  background-color: #0070c9;
`;

function Sidebar({ imageUrl, skills, languages }) {
  return (
    <SidebarContainer>
      <ProfileImage src={imageUrl} alt="Profile" />
      
      <SectionTitle>Skills</SectionTitle>
      <SkillList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillList>
      
      <SectionTitle>Languages</SectionTitle>
      {languages.map((language, index) => (
        <LanguageItem key={index}>
          <span>{language.name}</span>
          <ProgressBar>
            <Progress proficiency={language.proficiency} />
          </ProgressBar>
        </LanguageItem>
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;