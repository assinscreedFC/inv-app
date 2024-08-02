import { useContext, useEffect, useState } from "react";
import Type from "./Type.jsx";
import { BddContext } from "../App.jsx";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Carte({ val, ite }) {
    const { bdd ,setBdd} = useContext(BddContext);
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

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/api/items/delete/${val.id}`);
            console.log(res.data);

            // Filter out the deleted item from the state
            const updatedItems = bdd[1].filter(item => item.id !== val.id);
            setBdd([bdd[0], updatedItems]);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div className="w-[45%] md:w-[31%] bg-zinc-200 rounded-md p-2 flex flex-col gap-1 m-2">
            <div className="w-full flex justify-end items-center gap-2">
                <NavLink to="/items/edit"
                    state= {{data : val}}
                >EDIT</NavLink>
                <p className="text-lg font-semibold">|</p>

               <NavLink to="/delete"
                    state= {{data : val}}
                >DELETE</NavLink>
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
