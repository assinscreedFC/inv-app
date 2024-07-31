import { useEffect, useState } from "react"
import Type from "./Type.jsx"

function Carte({val}){
    console.log(val)
    const [types,settypes]=useState(null);
    const name="Game"
    useEffect(()=>{

    let conv=[];
        for (let index = 0; index < 6; index++) {
            conv.push(<Type key={index} name={name}/>)
            
        }
        settypes(conv);
    },[])
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