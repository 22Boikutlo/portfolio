import React from 'react'

function signup() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
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
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
        </div>
  )
}

export default signup