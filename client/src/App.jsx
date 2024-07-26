

import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
  
  return (
    <>
     <div className='w-full min-h-svh bg-custom-gradient  '>
        <Navbar/>
        <Outlet/>
     </div>
    </>
  )
}

export default App
