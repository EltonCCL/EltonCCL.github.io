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

const SubsectionTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 10px;
`;

const SkillItem = styled.li`
  font-size: 14px;
  margin-bottom: 3px;
`;

const LanguageItem = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

function Sidebar({ imageUrl, skills, languages }) {
  return (
    <SidebarContainer>
      <ProfileImage src={imageUrl} alt="Profile" />
      
      <SectionTitle>SKILLS</SectionTitle>
      
      <SubsectionTitle>Programming</SubsectionTitle>
      <SkillItem>{skills.Programming.join(', ')}</SkillItem>
      
      <SubsectionTitle>Technical</SubsectionTitle>
      {skills.Technical.map((category, index) => (
        <div key={index}>
          <SkillItem>{category.category}: {category.items.join(', ')}</SkillItem>
        </div>
      ))}
      
      <SectionTitle>Languages</SectionTitle>
      {languages.map((language, index) => (
        <LanguageItem key={index}>
        {language.name} ({language.level})
        </LanguageItem>
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;