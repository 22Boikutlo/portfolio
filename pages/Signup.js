import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from 'react';
import React from 'react'

function signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = async (e) => {
        e.preventDefault();
           
    const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/User/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Registration successful');
    } 
    else {
      alert(data.message || 'Registration failed');
    }
    }; 
return (
    <div>
      <div className='footer'>
        <div className='container'>
          <form className='text-field'  onSubmit={handleRegister}>
            <h2>Register</h2>
            <p>Please enter your email and password to register.</p>
            <div className='form-group'>
              <TextField
                label="Email"
                id='email'
                variant='standard'
                type='email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <TextField
                id='password'
                label="Password"
                variant='standard'
                type='password'
                className='form-control'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
            <Button variant="contained" color="primary" type="submit" className='myBtn'>Register</Button> 
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default signup