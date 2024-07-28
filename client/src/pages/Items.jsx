import { Outlet } from "react-router-dom"
import Carte from "../components/Carte.jsx"

function Items(){
    return (
        <div className="xl:w-11/12 lg:w-full bg-black flex flex-wrap gap-4 justify-center">
            
          <Outlet/>
        </div>
    )
}

export default Items