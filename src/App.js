import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
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
import Biography from './Biography';
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
  margin-bottom: 40px;
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

const Content = ({ headers }) => {
  return (
    <div className="content">
      {headers.map((header) => (
        <section key={header.id} id={header.id}>
          {header.component}
        </section>
      ))}
    </div>
  );
};

function App() {
  const headers = useMemo(() => [
    { id: 'biography', label: 'Biography', component: <Biography /> },
    { id: 'experience', label: 'Work Experience', component: <WorkExperience experiences={experienceData} /> },
    { id: 'projects', label: 'Projects', component: <Projects projects={projectsData} /> },
    { id: 'publications', label: 'Publications', component: <Publications /> },
    { id: 'education', label: 'Education', component: <Education /> },
    { id: 'patents', label: 'Patents', component: <Patents /> },
  ], []);

  const [activeId, setActiveId] = useState(headers[0].id);
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const activeHeader = headers.find((header) => {
        const element = document.getElementById(header.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          let top = offsetTop - 64;
          return scrollPosition >= top && scrollPosition < top + offsetHeight;
        }
        return false;
      });
      console.log(isActive)
      if (activeHeader && !isActive) {
        setActiveId(activeHeader.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headers, isActive]);

  const handleHeaderClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64,
        behavior: 'smooth',
      })
      setActiveId(id);
    }
  };

  const resetState = useCallback(() => {
    setIsActive(false);
    setCounter(0);
  }, []);

  const handleTabClick = () => {
    // Clear existing timers if any
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Set active state and reset counter
    setIsActive(true);
    setCounter(0);

    // Start new counter
    intervalRef.current = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    // Set timeout to reset state after 0.75 seconds
    timerRef.current = setTimeout(() => {
      resetState();
      clearInterval(intervalRef.current);
    }, 1000);
  };
  return (
    <>
      <GlobalStyle />
      <AppContainer>

        <TabContainer>
          {headers.map(header => (
            <TabButton
              key={header.id}
              active={activeId === header.id ? 'active' : ''}
              onClick={() => {
                handleTabClick();
                handleHeaderClick(header.id);
              }}
            >
              {header.label}
            </TabButton>
          ))}
        </TabContainer>

        <div className='container'>
          <div className="row ">
            <div className='col-lg-4'>
              <Sidebar {...sidebarData} />
            </div>
            <div className='col-lg-8'>
              <Content headers={headers} />
            </div>
          </div>
        </div>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;