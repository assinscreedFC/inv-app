import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Carte from "./Carte.jsx";
import { BddContext } from "../App.jsx";

function Delete() {
    const location = useLocation();
   
    const { data } = location.state || {};
    const [password, setPassword] = useState("");
    const { bdd, setBdd } = useContext(BddContext);

    const sub = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.delete(`/api/items/delete/${data.id}/${password}`);
            console.log(res);

            // Filtrer l'élément supprimé de l'état
            // const updatedItems = bdd[1].filter(item => item.id !== data.id);
            // setBdd([bdd[0], updatedItems]);
            // navigate("../items");
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <>
            <div className="w-full items-center flex flex-col">
                <Carte key={data.id} val={data} ite={data.categories_id} />
                <div className="w-[45%] md:w-[31%] bg-zinc-200 rounded-md p-2 flex flex-col gap-1 m-2">
                    <form className="w-full my-2" onSubmit={sub}>
                        <div className="w-full flex justify-center gap-2 items-center">
                            <label htmlFor="password" className="font-semibold text-xl">Password:</label>
                            <input
                                type="password"
                                name="password"
                                className="peer w-full md:w-[35%] text-black bg-transparent outline-none px-2 text-base rounded-xl bg-white border-[3px] border-[#4070f4] focus:shadow-md py-[2px]"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="w-full items-center justify-end flex mt-4 px-2">
                            <button className="px-4 py-1 rounded-md ring-green-600 ring-4 text-slate-50 flex justify-center items-center font-semibold text-xl bg-slate-800 my-2">Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Delete;
