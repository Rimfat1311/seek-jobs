import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Status from './components/Status';
                                              
const App = () => {
  return (
    <Router>
      <div >
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
         <Route path="/status" element={<Status/>}/>
        </Routes>
      
      </div>  
    </Router>
    
  );
}

export default App;
