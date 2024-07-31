import { NavLink, Outlet } from "react-router-dom"
import Carte from "../components/Carte.jsx"

function Items(){
    return (
        <div  className="flex flex-col lg:w-full items-center gap-4">
            <NavLink to="new" className="px-4 w-fit py-1 rounded-md ring-green-600 ring-4 text-slate-50 flex justify-center items-center font-semibold text-xl bg-slate-800 ">NEW</NavLink>
            
             <div className=" w-full flex flex-wrap gap-4 justify-center">
            
          <Outlet/>
        </div></div>
       
    )
}

export default Items