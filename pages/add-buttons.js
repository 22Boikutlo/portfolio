import React from 'react'
import { Button, TextField } from '@mui/material';
import Link from 'next/link';

function AddButtons() {
  return (
    <div>
      <div className='footer'>
        <div className='container'>
          <h2>Add New Skill or Project</h2>
          <p>Click the buttons below to add a new skill or project to your portfolio.</p>
          <div>
            <Link href="/add-skill">
              <Button variant="contained" className="myBtn" color="primary">
                Add Skill
              </Button>
            </Link>
          </div>
          <div>
            <Link href="/add-project">
              <Button variant="contained" className="myBtn" color="primary">
                Add Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddButtons;