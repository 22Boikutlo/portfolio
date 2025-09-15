import React from 'react';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import project from './assets/project.png';

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Project');
        const data = await res.json();
        setProjects({ first: data[0], second: data[1], third: data[2] });
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    }
    fetchProjects();
  }, []);
  return (
    <div id="projects">
      <div className="container">
        <h1 className='skills-title'> <Image src={project} alt='project' className='heading-icon'/>Projects</h1>
        <div  className="projects">
          <div className="project-item">
            <h2>{projects.first?.ProjectName}</h2>
            <p>{projects.first?.ProjectDescription}</p>
            <Button variant="contained" color="primary" href={projects.first?.ProjectURL} target="_blank" rel="noopener noreferrer">
              View Project
            </Button>
          </div>
          <div className="project-item">
            <h2>{projects.second?.ProjectName}</h2>
            <p>{projects.second?.ProjectDescription}</p>
            <Button variant="contained" color="primary" href={projects.second?.ProjectURL} target="_blank" rel="noopener noreferrer" >
              View Project
            </Button>
          </div>

          <div className="project-item">
            <h2>{projects.third?.ProjectName}</h2>
            <p>{projects.third?.ProjectDescription}</p>
            <Button variant="contained" color="primary" href={projects.third?.ProjectURL}target="_blank" rel="noopener noreferrer" >
              View Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
