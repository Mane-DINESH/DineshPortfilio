import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import PortFolio from './components/PortFolio'
import Contact from './components/Contact'
import { Toaster } from "react-hot-toast";
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <PortFolio/>
     <Toaster position="top-center" />
      <Contact/>

    <Footer/>
   
    </>
  )
}

export default App
