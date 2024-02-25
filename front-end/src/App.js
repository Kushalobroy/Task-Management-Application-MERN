import {React , useState}from 'react';
import { BrowserRouter as Router, Route, Routes, Link,Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);
  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} />
  
    <Router>
      
    < Routes>
        <Route exact path="/" element={<Login setLoggedIn={setLoggedIn}/>} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
        <Route path="/register" element={<Register setLoggedIn={setLoggedIn}/>} />
      
        <Route
        path="/dashboard"
        element={loggedIn ? <Dashboard/> : <Navigate to="/login" />}
      />
        
    </Routes>
    </Router>
    </div>
    
  );
}


export default App;
