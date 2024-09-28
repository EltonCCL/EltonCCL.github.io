import React from 'react';
import styled from 'styled-components';

const ExperienceTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const AboutMeContainer = styled.div`

`;

const Separate = styled.div`
    border-bottom: 1px solid #a5a5a5;
    width: calc(100% - 0px);
    transform: translate(0px, -8px);
`;

function Biography() {
  return (
    <AboutMeContainer>

      <ExperienceTitle>Biography</ExperienceTitle>
      <Separate></Separate>
      <div style={{margin: '8px 0px'}}>
      <p>
      I am an MPhil student at the <a href='https://cse.hkust.edu.hk' target='_blank'>Department of Computer Science and Engineering</a>, <a href='https://hkust.edu.hk' target='_blank'>Hong Kong University of Science and Technology (HKUST)</a>, and a member of the <a href='https://cse.hkust.edu.hk/dsf/DSF.html' target='_blank'>DSF Lab</a>. My supervisor is <a href='https://sites.google.com/view/xiaofang-zhou' target='_blank'>Prof. Xiaofang Zhou</a>. Previously, I interned at HKUST as a Junior Research Assistant and Dymon Asia Capital as a Quant Research Intern. I received my Bachelor's degree in Computer Science from HKUST in June 2024.
      </p>
      <p>
      Currently, I am focusing on research in knowledge graph, large language model, and graph neural network. I am also interested in machine learning, data mining, and natural language processing. 
      </p>
      </div>
    </AboutMeContainer>
  );
}

export default Biography;