

import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import  Home  from './components/Home'
import Routing from "react"
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Tosleep } from './components/Tosleep'
import Signup from './components/Signup'
import Login from './components/Login'
import { useEffect,useState } from 'react'
import { Profile } from './components/Profile'

function App() {

  const [user,setUser] = useState(null)

  useEffect(() => {
    const storeuser = localStorage.getItem("user")
    if(storeuser){
      setUser(JSON.parse(storeuser))
    }
  },[])
  

  return (
    <Router>
    <Navbar user={user} setUser={setUser} />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tosleep" element={<Tosleep/>} />
      <Route path="/Signup"  element={<Signup/>} />
      <Route path='/Login'element={<Login user={user} setUser={setUser}/>} />
      <Route path='/Profile'element={<Profile user={user} setUser={setUser}/>} />
    

     
    </Routes>

    <Footer />
  </Router>
);
  
}

export default App
