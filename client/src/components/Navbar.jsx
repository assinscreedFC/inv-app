import { NavLink } from "react-router-dom";

function Navbar (){


    return (
        <>
        <header className="w-full min-h-24 bg-zinc-800/80 border-b-2 border-zinc-200 flex justify-between items-center px-10">
            <div>
                <h1 className=" text-4xl font-semibold text-zinc-200 ">Inventory</h1>
            </div>
            <nav className="text-xl font-semibold text-zinc-200 w-fit">
                
                <NavLink to="/items" className=" hover:animate-pulse w-6 h-6 mx-4"> item </NavLink>
                    <NavLink to="/categories" className=" hover:animate-pulse w-6 h-6"> categorie</NavLink>
            </nav>
        </header>
        </>
    )
}
export default Navbar