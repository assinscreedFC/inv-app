import { useState, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";

function CreateIte() {
    const [title, setTitle] = useState("");
    const [unit, setUnit] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        // Simuler la récupération des catégories de la base de données
const data=["anis","yanis" ,"sabrina"];
setCategories(data);

    }, []);

    const handleCheckboxChange = (categoryId) => {
        setSelectedCategories(prevSelected =>
            prevSelected.includes(categoryId)
                ? prevSelected.filter(id => id !== categoryId)
                : [...prevSelected, categoryId]
        );
    };

    const sub = (e) => {
        e.preventDefault();
        console.log("Title:", title);
        console.log("Unit:", unit);
        console.log("Selected Categories:", selectedCategories);
        setRedirect(true);
    };

    if (redirect) {
        return <Navigate to="../items" />;
    }

    return (
        <>
            <form onSubmit={sub} className="w-11/12 md:w-fit
             md:px-20 md:py-8 bg-white/5 gap-4 flex flex-col items-center justify-start border-4 border-blue-900 py-8 text-white rounded-md">
                <NavLink to="../items" className="px-4 py-1 rounded-md ring-green-600 ring-4 text-slate-50 flex justify-center items-center font-semibold text-xl bg-slate-800 "> Return </NavLink>        
                <div className="w-full flex justify-center gap-2 items-center ">
                    <label htmlFor="title" className="font-semibold text-xl">Title:</label>
                    <input
                        type="text"
                        name="title"
                        className="peer text-black bg-transparent outline-none px-2 text-base rounded-xl bg-white border-[3px] border-[#4070f4] focus:shadow-md py-[2px]"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="w-full justify-center flex gap-2 items-center">
                    <label htmlFor="unit" className="font-semibold text-xl">Unit:</label>
                    <input
                       className="peer text-black bg-transparent outline-none px-2 text-base rounded-xl bg-white border-[3px] border-[#4070f4] focus:shadow-md py-[2px]"
                        type="text"
                        name="unit"
                        id="unit"
                        value={unit}
                        onChange={e => setUnit(e.target.value)}
                    />
                </div>
                <div className="w-fit gap-2 flex flex-col items-center ">
                    <label className="font-semibold text-xl">Categories:</label>
                    <div className="w-full">
                         {categories.map(category => (
                        <div key={category.id} className="flex gap-2 font-semibold">
                            <input
                                type="checkbox"
                                id={`category-${category}`}
                                name="categories"
                                value={category}
                                className="w-4"
                                onChange={() => handleCheckboxChange(category)}
                            />
                            <label htmlFor={`category-${category}`}>{category}</label>
                        </div>
                    ))}
                    </div>
                   
                </div>
                <button type="submit" className="px-4 py-1 rounded-md ring-green-600 ring-4 text-slate-50 flex justify-center items-center font-semibold text-xl bg-slate-800 my-2">Send</button>
            </form>
        </>
    );
}

export default CreateIte;
