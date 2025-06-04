import React from 'react'

const signin = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
      const handlesignin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/account/login', {
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
      <h2>Sign In</h2>
      <p>Please enter your email and password to sign in.</p>

      <form onSubmit={handlesignin}>
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
        <Button variant="contained" color="primary" type="submit" className='myBtn'>Sign In</Button>
      </form>
    </div>
  )
}

export default signin