import { useContext, useEffect, useState } from "react";
import Categorie from "../components/Categorie.jsx"
import { NavLink } from "react-router-dom";
import { BddContext } from "../App.jsx";


function Categories() {
    const { bdd } = useContext(BddContext);
    const [br, setBr] = useState([]);
    const rab = ["game", "jeux", "anis"];

    useEffect(() => {
        if (bdd && bdd.length > 0 && bdd[0].length > 0) {
            let tt = bdd[0].map((el) => (
                <Categorie ell={el.name} key={el.id} />
            ));
            setBr(tt);
        }
    }, [bdd]);

    return (
        <div className="flex flex-col w-full lg:w-8/12 items-center justify-center gap-4 p-2">
            <NavLink
                to="../categories/new"
                className="px-4 py-1 rounded-md ring-green-600 ring-4 text-slate-50 flex justify-center items-center font-semibold text-xl bg-slate-800"
            >
                New
            </NavLink>
            {br}
        </div>
    );
}

export default Categories