import { useContext, useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import axios from "axios"
import { BddContext } from "../App.jsx";

function CreateCat() {
    const {bdd,setBdd}=useContext(BddContext);
    const [val, setVal] = useState("");
    const [redirect, setRedirect] = useState(false);

    const sub = async (e) => {
        const tab=bdd;
        e.preventDefault();
        
        try {      
            
            
            const req = await axios.post("/api/categories/new", { name: val }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            tab[0].push(req.data);
            setBdd(tab)
            console.log(tab);
            setRedirect(true)
        } catch (error) {
            console.error('Error posting new category', error);
        }
    };
    

    if (redirect) {
        
        return <Navigate to="/categories" />;
    }

    return (
        <>
            <form onSubmit={sub} className="bg-white/5 md:w-fit
            w-11/12  flex items-center flex-col md:gap-8 p-8 rounded-md border-4 border-blue-900 gap-4 ">
            <NavLink to="../categories" className="px-4 py-1 rounded-md ring-green-600 ring-4 text-slate-50 flex justify-center items-center font-semibold text-xl bg-slate-800 ">Return</NavLink>
                <div className="flex w-full gap-4 justify-center flex-col md:flex-row  items-center">
                <div className="flex flex-col md:flex-row gap-2">
                <label htmlFor="title" className="text-lg font-medium text-white">Title: </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border-[3px] border-[#4070f4] focus:shadow-md py-[2px]"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
                </div>
                
               
                <button type="submit" className=" px-4 py-1 rounded-md border-green-500 border-[3px] font-semibold text-lg bg-slate-800 text-slate-50 ">Send</button>
                </div>
               
            </form>
        </>
    );
}

export default CreateCat;
