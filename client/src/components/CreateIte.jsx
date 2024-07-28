import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

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
        return <Navigate to="/item" />;
    }

    return (
        <>
            <form onSubmit={sub} className="w-1/2 gap-2 flex flex-col items-center justify-start border-4 border-blue-900 p-4 rounded-md">
                <div className="w-full flex gap-2 items-center">
                    <label htmlFor="title" className="font-semibold text-xl">Title:</label>
                    <input
                        type="text"
                        name="title"
                        className="p-1 rounded-md"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="w-full flex gap-2 items-center">
                    <label htmlFor="unit" className="font-semibold text-xl">Unit:</label>
                    <input
                       className="p-1 rounded-md"
                        type="text"
                        name="unit"
                        id="unit"
                        value={unit}
                        onChange={e => setUnit(e.target.value)}
                    />
                </div>
                <div className="w-full ">
                    <label className="font-semibold text-xl">Categories:</label>
                    {categories.map(category => (
                        <div key={category.id}>
                            <input
                                type="checkbox"
                                id={`category-${category.id}`}
                                name="categories"
                                value={category.id}
                                onChange={() => handleCheckboxChange(category.id)}
                            />
                            <label htmlFor={`category-${category.id}`}>{category.name}</label>
                        </div>
                    ))}
                </div>
                <button type="submit" className="px-4 py-1 my-9 bg-zinc-100 rounded-md ring-green-500 font-semibold text-zinc-950 text-lg ring-offset-2 ring-offset-current ring-2">Send</button>
            </form>
        </>
    );
}

export default CreateIte;
