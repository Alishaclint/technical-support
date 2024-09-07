import React from 'react'
import './App.css'
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Status from './Pages/Status/Status';
Home

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />   {/* Home page */}
        <Route path="/home" element={<Home />} /> {/* Login page */}
        <Route path="/status" element={<Status />} /> {/* Login page */}

      </Routes>
    </Router>
     
    
    </>
  )
}

export default App