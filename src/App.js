import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Footer from './Footer';
import experienceData from './data.json';
import projectsData from './projects.json'; // You'll need to create this file

const AppContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const TabButton = styled.button`
  background-color: ${props => props.active ? '#0070c9' : '#f5f5f7'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin: 0 10px;

  &:hover {
    background-color: ${props => props.active ? '#0070c9' : '#e5e5e7'};
  }
`;

function App() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <AppContainer>
      <Header />
      <TabContainer>
        <TabButton
          active={activeTab === 'experience'}
          onClick={() => setActiveTab('experience')}
        >
          Work Experience
        </TabButton>
        <TabButton
          active={activeTab === 'projects'}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </TabButton>
      </TabContainer>
      {activeTab === 'experience' ? (
        <WorkExperience experiences={experienceData} />
      ) : (
        <Projects projects={projectsData} />
      )}
      <Footer />
    </AppContainer>
  );
}

export default App;