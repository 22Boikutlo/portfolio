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
    <div>signin
        <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default signin