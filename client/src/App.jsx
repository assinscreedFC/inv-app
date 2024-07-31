

import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    const b=axios.get("/api");
  },[])
  
  
  return (
    <>
     <div className='w-full min-h-svh bg-custom-gradient flex flex-col  items-center justify-start gap-10  '>
        <Navbar/>
        <Outlet/>
        <Footer/>
     </div>
    </>
  )
}

export default App
