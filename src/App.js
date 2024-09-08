import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Footer from './Footer';
import experienceData from './data.json';
import projectsData from './projects.json';
import sidebarData from './sidebar.json';
import AboutMe from './AboutMe';
import Publications from './Publication';
import Education from './Education';
import Patents from './Patents';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f7;
    --text-primary: #333333;
    --text-secondary: #666666;
    --accent-color: #333333;
    --border-color: #e0e0e0;
  }
`;

const AppContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px 40px 20px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 40px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 20px;
  overflow-x: clip;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  position: sticky;
  top: 0px;
  z-index: 20;
  
  background-color: rgba(256, 256, 256, 0.61);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(8px);
`;

const TabButton = styled.button`
  background-color: transparent;
  color: ${props => props.active ? 'var(--accent-color)' : 'var(--text-secondary)'};
  border: none;
  padding: 10px 0;
  margin-right: 20px;
  font-size: 18px;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  z-index: 20;
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--accent-color);
    transform: scaleX(${props => props.active ? 1 : 0});
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--accent-color);
  }
`;

const TabHeader = styled.div`
  transform: translateX(-12px);
  @media (max-width: 992px) {
    margin-top: 40px;
  }
`;

function App() {
  const [activeTab, setActiveTab] = useState('experience');
  const tabs = [
    { id: 'about', label: 'About Me', component: <AboutMe /> },
    { id: 'experience', label: 'Work Experience', component: <WorkExperience experiences={experienceData} /> },
    // { id: 'education', label: 'Education', component: <Education /> },
    { id: 'projects', label: 'Projects', component: <Projects projects={projectsData} /> },
    { id: 'publications', label: 'Publications', component: <Publications /> },
    { id: 'patents', label: 'Patents', component: <Patents /> },
  ];
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {/* <TabHeader className='d-flex flex-row'>
          <div style={{ width: "12px", height: "100%", backgroundColor: "red" }}></div> */}
          <TabContainer>
            {tabs.map(tab => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </TabButton>
            ))}
          </TabContainer>
        {/* </TabHeader> */}
        {/* <Header /> */}
        <div className='container'>
          <div className="row ">
            <div className='col-lg-4'>
              <Sidebar {...sidebarData} />
            </div>
            <div className='col-lg-8'>

              {tabs.find(tab => tab.id === activeTab).component}
            </div>
          </div>
        </div>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;