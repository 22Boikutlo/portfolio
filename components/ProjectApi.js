import React from 'react';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Project');
                const data = await res.json();
                setProjects({first:data[0], second:data[1], third:data[2]});
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            }
        }
        fetchProjects();
    }, []);
  return (
    <div id="projects" className="projects">
      <div className="container">
        <h1>Projects</h1>
        <Link href="/add-project">
          <Button variant="contained" className='myBtn' color="primary"  >
            Add Project
          </Button>        
      </Link>
        <div className="row">

          <div className="col-md-4">
            <div className="project-item">
              <h2>{projects.first?.ProjectName}</h2>
              <p>{projects.first?.ProjectDescription}</p>
              <Button
                variant="contained"
                color="primary"
                href={projects.first?.ProjectURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="project-item">
              <h2>{projects.second?.ProjectName}</h2>
              <p>{projects.second?.ProjectDescription}</p>
              <Button
                variant="contained"
                color="primary"
                href={projects.second?.ProjectURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Button>             
            </div>
          </div>

          <div className="col-md-4">
            <div className="project-item">
              <h2>{projects.third?.ProjectName}</h2>
              <p>{projects.third?.ProjectDescription}</p>
              <Button
                variant="contained"
                color="primary"
                href={projects.third?.ProjectURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
