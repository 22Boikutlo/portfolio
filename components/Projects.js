import React from 'react';
import { Button } from '@mui/material';

function Projects() {
  return (
    <div id="projects" className="projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="row">

          <div className="col-md-4">
            <div className="project-item">
              <h2>Store Management</h2>
              <p>First Windows Forms application using SQL and C#.</p>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/22Boikutlo/Store-Management"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="project-item">
              <h2>Plumbing Website</h2>
              <p>LPS website showcasing their work and contact information.</p>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/22Bohloko/LPS-Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="project-item">
              <h2>Portfolio Website</h2>
              <p>Showcasing my skills and contact information.</p>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/22Boikutlo/Portfolio-website"
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
