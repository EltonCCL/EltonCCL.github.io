import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
`;

const ProjectsTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ProjectCard = styled.div`
  border-radius: 18px;
  padding: 0px 0px 16px 0px;
`;

const ProjectName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const DescriptionList = styled.ul`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 0px;
`;

const DescriptionItem = styled.li`
  margin-bottom: 8px;
`;

const ProjectLink = styled.a`
  color: #0070c9;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Separate = styled.div`
    border-bottom: 1px solid #a5a5a5;
    width: calc(100% - 0px);
    transform: translate(0px, -7px);
`;

function Projects({ projects }) {
  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      {projects.map((project, index) => (
        <>
        <Separate></Separate>
        <ProjectCard key={index}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <ProjectName>{project.name}</ProjectName>
          {project.link && <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
            [Code]
          </ProjectLink>}
          </div>
          <DescriptionList>
            {project.description.map((item, itemIndex) => (
              <DescriptionItem key={itemIndex}>{item}</DescriptionItem>
            ))}
          </DescriptionList>

        </ProjectCard></>

      ))}
    </ProjectsContainer>
  );
}

export default Projects;