import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setLoggedIn(true);
      navigate('/dashboard');
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
    
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className='container'>
        <ToastContainer position="top-center" autoClose={3000} />
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
   
    </div>
  );
};

export default Login;
