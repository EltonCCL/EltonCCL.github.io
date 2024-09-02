import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import WorkExperience from './WorkExperience';
import Footer from './Footer';
import experienceData from './data.json';

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

function App() {
  return (
    <AppContainer>
      <Header />
      <WorkExperience experiences={experienceData} />
      <Footer />
    </AppContainer>
  );
}

export default App;