import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/signup', { username, password });
      localStorage.setItem('token', res.data.token);
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
     
      <form onSubmit={handleSubmit}>
      <div className='signup__container'>
            <h2>Sign up </h2>
            <form className='signup__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    placeholder='Email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    value={username}
                    placeholder='Username'
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
               
                <label htmlFor='tel'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    minLength={8}
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='signupBtn'>SIGN UP</button>
                <p>
                    Already have an account?{" "}
                    <span className='link' >
                        <a href='/login' className='link'>Login</a>
                    </span>
                </p>
            </form>
        </div>
      </form>
    </div>
  );
};

export default Register;
