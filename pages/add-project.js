import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button } from '@mui/material';

const AddProject = () => {
  const [project, setProject] = useState({
    ProjectName: '',
    ProjectDescription: '',
    ProjectURL: '',
    Languages: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProject((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });

      if (!response.ok) throw new Error('Failed to add project');

      setSuccessMessage('Project added successfully! Redirecting...');
      setErrorMessage('');

      setTimeout(() => router.push('/'), 2000);
    } catch (error) {
      console.error('Error adding project:', error);
      setErrorMessage('Error adding project. Please try again.');
    }
  };

  return (
    <div className="footer">
      <div className="container">
        <h2>Add New Project</h2>
        <form className="text-field" onSubmit={handleSubmit}>

          <TextField
            id="ProjectName"
            label="Project Name"
            variant="standard"
            value={project.ProjectName}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />

          <TextField
            id="ProjectDescription"
            label="Project Description"
            variant="standard"
            value={project.ProjectDescription}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />

          <TextField
            id="ProjectURL"
            label="Project URL"
            variant="standard"
            type="url"
            value={project.ProjectURL}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            id="Languages"
            label="Languages Used"
            variant="standard"
            value={project.Languages}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <Button variant="contained" color="primary" type="submit">
            Add Project
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
