import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', { username, password });
      localStorage.setItem('token', res.data.token);
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
 
      <form onSubmit={handleSubmit}>
      <div className='login__container'>
            <h2>Login </h2>
            <form className='login__form' onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    id='email'
                    name='username'
                    value={username}
                    placeholder='Username'
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
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
                <button className='loginBtn'>SIGN IN</button>
                <p>
                    Don't have an account?{" "}
                    <span className='link' >
                        <a href='/register'className='link' >Register</a>
                    </span>
                </p>
            </form>
        </div>
       
      </form>
    </div>
  );
};

export default Login;
