import React from 'react'
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const handleSignin = async (e) => {
    e.preventDefault();
    const res = await fetch('https://boikutloportfolioapi.azurewebsites.net/api/User/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      alert('signin successful');
    } else {
      alert(data.message || 'signin failed');
    }};
  return (
    <div>
      <div className='footer'>
        <div className='container'>
          <form className= "text-field" onSubmit={handleSignin}>
            <h2>Sign In</h2>
            <p>Please enter your email and password to sign in.</p>
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
            <Link href="/add-buttons" className='myBtn'>
              <Button variant="contained" color="primary" type="submit" className='myBtn'>Sign In</Button>              
            </Link>           
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin