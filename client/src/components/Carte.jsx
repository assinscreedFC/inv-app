import { useContext, useEffect, useState } from "react"
import Type from "./Type.jsx"
import { BddContext } from "../App.jsx";

function Carte({val}){
    const {bdd}=useContext(BddContext)
    console.log(val)
    const [types,settypes]=useState(null);
    const name="Game"
    useEffect(() => {
        if (bdd.length > 0) {
            let conv = bdd[0];
            let categoryIds = bdd[1].map(item => item.categories_id);
    
            // Filter the elements in bdd[0] based on the presence of categories_id in bdd[1]
            conv = conv.filter(element => 
                element && element.some(id => categoryIds.includes(id))
            );
    
            console.log(bdd[1]+"Filtered categories:", conv);
            settypes(conv);
        }
    }, []);
    return(
        <div className=" lg:w-[32%]  bg-zinc-200 rounded-md p-2 flex flex-col gap-1 m-2 ">
            <div className="w-full flex justify-end gap-2">
                <button> EDIT</button>
                <p className="text-lg font-semibold">|</p>
                <button>Delete</button>
            </div>
            <h1>{val.name}</h1>
            <h3>{val.units}: 1</h3>
            <h3>{val.des}</h3>
            <div className="flex gap-2 flex-wrap">
                 {types}
            </div>
           
        </div>
        
    )
}
export default Carte