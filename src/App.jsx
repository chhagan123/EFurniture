import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import  Home  from './components/Home'
import Routing from "react"
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Tosleep } from './components/Tosleep'


function App() {
  

  return (
    <Router>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tosleep" element={<Tosleep/>} />
     
    </Routes>

    <Footer />
  </Router>
);
  
}

export default App
