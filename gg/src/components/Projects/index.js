import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From 1st year to 3rd year. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "1st year" ? (
            <ToggleButton
              active
              value="1st year"
              onClick={() => setToggle("1st year")}
            >
              1ST YEAR
            </ToggleButton>
          ) : (
            <ToggleButton
              value="1st year"
              onClick={() => setToggle("1st year")}
            >
              1ST YEAR
            </ToggleButton>
          )}
          <Divider />
          {toggle === "2nd year" ? (
            <ToggleButton
              active
              value="2nd year"
              onClick={() => setToggle("2nd year")}
            >
              2ND YEAR
            </ToggleButton>
          ) : (
            <ToggleButton
              value="2nd year"
              onClick={() => setToggle("2nd year")}
            >
              2ND YEAR
            </ToggleButton>
          )}
          <Divider />
          {toggle === "3rd year" ? (
            <ToggleButton
              active
              value="3rd year"
              onClick={() => setToggle("3rd year")}
            >
              3RD YEAR
            </ToggleButton>
          ) : (
            <ToggleButton
              value="3rd year"
              onClick={() => setToggle("3rd year")}
            >
              3RD YEAR
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default Projects