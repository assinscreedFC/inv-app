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
            <NavLink to="../categories/new">New</NavLink>
           {br}

        </div>
    )
}

export default Categories