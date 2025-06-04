import React from 'react'
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';

const AddSkill = () => {
    const [addskill, setAddSkill] = useState({
        SkillName: '',
        SkillDescription: '',
        WebAddress: '',
        SelfRating: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/Skill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addskill),
      });

      if (!response.ok) throw new Error('Failed to add skill');

      const data = await response.json();
      setSuccessMessage('Skill added successfully! Redirecting...');
      setErrorMessage('');

      setTimeout(() => router.push('/'), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Error adding skill:', error);
      setErrorMessage('Error adding skill. Please try again.');
    }
  };
    
  return (
    <>
        <div className='footer'>
            <div className= 'container'>
                <h2>Add New Skill</h2>
                <form className='text-field' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <TextField
                            label="Skill Name"
                            id='skillName'
                            variant='standard'
                            type='text'
                            className='form-control'
                            value={addskill.SkillName}
                            onChange={(e) => setAddSkill({ ...addskill, SkillName: e.target.value })}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <TextField
                            id='skillDescription'
                            label="Skill Description"
                            variant='standard'
                            type='text'
                            className='form-control'
                            value={addskill.SkillDescription}
                            onChange={(e) => setAddSkill({ ...addskill, SkillDescription: e.target.value })}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <TextField
                            id='webaddress'  
                            label="WebAddress"
                            variant='standard'
                            type='text'
                            className='form-control'
                            value={addskill.WebAddress}
                            onChange={(e) => setAddSkill({ ...addskill, WebAddress: e.target.value })}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <TextField
                            id='selfRating'
                            label="Self Rating"
                            variant='standard'
                            type='number'
                            className='form-control'
                            value={addskill.SelfRating}
                            onChange={(e) => setAddSkill({ ...addskill, SelfRating: e.target.value })}
                            inputProps={{ min: 1, max: 10 }}
                            required
                            />

                    </div>
                    <Button variant="contained" className='myBtn' color="primary" type='submit'>
                        Add Skill
                    </Button>
                
            </form>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        </div>
    </>
  )
}

export default AddSkill