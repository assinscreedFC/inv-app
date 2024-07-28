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
            <form onSubmit={sub}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="unit">Unit:</label>
                    <input
                        type="text"
                        name="unit"
                        id="unit"
                        value={unit}
                        onChange={e => setUnit(e.target.value)}
                    />
                </div>
                <div>
                    <label>Categories:</label>
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
                <button type="submit">Send</button>
            </form>
        </>
    );
}

export default CreateIte;
