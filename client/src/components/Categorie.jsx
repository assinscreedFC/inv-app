import { NavLink } from "react-router-dom"

function Categorie({ell}){
    return (
        <NavLink to={`/items/${ell}`} className="w-full p-4 rounded-md bg-white border-green-500 border-4 font-semibold text-xl">
        
          <p>{ell}</p>
        
      </NavLink>
    )
}
export default Categorie