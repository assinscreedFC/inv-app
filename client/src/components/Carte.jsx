import { useContext, useEffect, useState } from "react";
import Type from "./Type.jsx";
import { BddContext } from "../App.jsx";

function Carte({ val, ite }) {
    const { bdd } = useContext(BddContext);
    const [types, setTypes] = useState(null);

    useEffect(() => {
        if (bdd.length > 0) {
            let categories = bdd[0];
            let categoryNames = ite.map(id => {
                let category = categories.find(cat => cat.id === id);
                return category ? <Type key={id} name={category.name} /> : null;
            });

            setTypes(categoryNames);
        }
    }, [bdd, ite]);

    return (
        <div className="lg:w-[32%] bg-zinc-200 rounded-md p-2 flex flex-col gap-1 m-2">
            <div className="w-full flex justify-end gap-2">
                <button>EDIT</button>
                <p className="text-lg font-semibold">|</p>
                <button>Delete</button>
            </div>
            <h1>title: {val.title}</h1>
            <h3>units: {val.units}</h3>
            <h3>description: {val.description}</h3>
            <div className="flex gap-2 flex-wrap">
                {types}
            </div>
        </div>
    );
}

export default Carte;
