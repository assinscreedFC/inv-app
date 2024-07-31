import { useEffect, useState } from "react";
import Categorie from "../components/Categorie.jsx"
import { NavLink } from "react-router-dom";

function Categories(){
    const [br,setbr]=useState([]);
    const rab=["game","jeux","anis"];

    useEffect(()=>{
        let tt=[]
        rab.forEach(el=>{
            tt.push(<Categorie ell={el} key={el}/>)})
        setbr(tt)
},[])


    return(
        <div className="flex flex-col w-full lg:w-8/12 items-center justify-center gap-2 p-2">
            <NavLink to="../categories/new" className="px-4 py-1 rounded-md ring-green-600 ring-4 text-slate-50 flex justify-center items-center font-semibold text-xl bg-slate-800 ">New</NavLink>
           {br}

        </div>
    )
}

export default Categories