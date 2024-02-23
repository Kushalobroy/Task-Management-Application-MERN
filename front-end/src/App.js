import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    < Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
        {/* <PrivateRoute path="/add-task" component={TaskForm} />
        <PrivateRoute path="/edit-task/:id" component={TaskForm} /> */}
    </Routes>
    </Router>
    
  );
}

export default App;
