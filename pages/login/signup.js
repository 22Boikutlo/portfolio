import { Button } from '@mui/material';
import React from 'react'

function signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = async (e) => {
        e.preventDefault();
           
    const res = await fetch('http://localhost:5000/api/account/register', {
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
        <form onSubmit={handleRegister}>
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
          <Button variant="contained" color="primary" type="submit" className='myBtn'>Register</Button> 
      </form>
    </div>
  )
}

export default signup