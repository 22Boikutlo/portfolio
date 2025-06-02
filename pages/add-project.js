import { Add } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button } from '@mui/material';

const AddProject = () => {
    const [addProject, setAddProject] = useState({
        ProjectName: '',
        ProjectDescription: '',
        ProjectURL: '',
        Languages: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Project', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(addProject),
            });

            if (!response.ok) throw new Error('Failed to add project');

            const data = await response.json();
            setSuccessMessage('Project added successfully! Redirecting...');
            setErrorMessage('');

            setTimeout(() => router.push('/'), 2000); // Redirect after 2 seconds
        } catch (error) {
            console.error('Error adding project:', error);
            setErrorMessage('Error adding project. Please try again.');
        }
    };
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <h2>Add New Project</h2>
                    <form className='text-field' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <TextField
                                label="Project Name"
                                id='projectName'
                                variant='standard'
                                type='text'
                                className='form-control'
                                value={addProject.ProjectName}
                                onChange={(e) => setAddProject({ ...addProject, ProjectName: e.target.value })}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <TextField
                                id='projectDescription'
                                label="Project Description"
                                variant='standard'
                                type='text'
                                className='form-control'
                                value={addProject.ProjectDescription}
                                onChange={(e) => setAddProject({ ...addProject, ProjectDescription: e.target.value })}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <TextField
                                id='projectURL'
                                label="Project URL"
                                variant='standard'
                                type='url'
                                className='form-control'
                                value={addProject.ProjectURL}
                                onChange={(e) => setAddProject({ ...addProject, ProjectURL: e.target.value })}
                            />
                        </div>
                        <div className='form-group'>
                            <TextField
                                id='languages'
                                label="Languages Used"
                                variant='standard'
                                type='text'
                                className='form-control'
                                value={addProject.Languages}
                                onChange={(e) => setAddProject({ ...addProject, Languages: e.target.value })}
                            />
                        </div>
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        <Button variant="contained" color="primary" type="submit">Add Project</Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddProject 