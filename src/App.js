import React from 'react'
import Navbar from './components/Navbar'
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route   path= "/about" element={<About/>} /> 
         <Route path="/ser"  element={<Services/>} />
         <Route path="/con"  element={<Contact/>} />
      </Routes>
      <Footer/>
      </ Router >
    </div>
  )
}

export default App