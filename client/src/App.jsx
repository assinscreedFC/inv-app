

import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import axios from 'axios';
import { useEffect, createContext, useState ,useContext} from 'react';
import { Toaster } from 'sonner';

const BddContext = createContext();





function App() {
  const [bdd, setBdd] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [Cat, Item] = await Promise.all([
          axios.get("/api/table/categories"),
          axios.get("/api/table/items"),
        ]);
        console.log(Item.data.rows);
        setBdd([Cat.data.rows, Item.data.rows]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    
  }, []);

  return (
    
      <div className='w-full min-h-svh bg-custom-gradient flex flex-col items-center justify-start gap-10'>
        <Navbar />
        <BddContext.Provider value={{bdd,setBdd}}>
        <Outlet /> 
         </BddContext.Provider><Toaster />
        <Footer />
        
      </div>
  
  );
}

export default App;
export { BddContext };


