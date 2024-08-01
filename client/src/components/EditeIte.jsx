import { useState, useEffect ,useContext} from "react";
import { Navigate, NavLink,useLocation  } from "react-router-dom";
import axios from "axios";
import { BddContext } from "../App.jsx";



function EditeIte() {
    
    const location = useLocation();
    const { data } = location.state || {};
    const { bdd, setBdd } = useContext(BddContext);
    const [title, setTitle] = useState(data.title);
    const [unit, setUnit] = useState(data.units);
    const [description, setDescription] = useState(data.description); 
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [redirect, setRedirect] = useState(false);
    
    useEffect(() => {
         console.log(data);
         //recuperer les categorie cheked
         if (bdd.length > 0) {
            let tab=[];
            
            const bdd_cat=bdd[0];
            
            const data_catid=data.categories_id;
            bdd_cat.forEach((el)=>{
               
                data_catid.forEach(dz=>{
                    if(el.id===dz){
                        tab.push(el)
                    }
                })
            })
            const br=tab.map(el=>el.id)
            console.log(br)
            setSelectedCategories(br)
            setCategories(bdd[0]);}
    }, []);

    const handleCheckboxChange = (categoryId) => {
        setSelectedCategories(prevSelected =>
            prevSelected.includes(categoryId)
                ? prevSelected.filter(id => id !== categoryId)
                : [...prevSelected, categoryId]
        );
    };

    const sub = async (e) => {
        e.preventDefault();
        
        console.log(typeof(parseInt(unit)));
        console.log("Title:", title);
        console.log("Unit:", unit);
        console.log("Description:", description); 
        console.log("Selected Categories:", selectedCategories);

        try {
            let tab=bdd;
            const te=parseInt(unit);
            const reqData = { title,units: te , des: description, categories: selectedCategories,id: data.id };
            console.log(reqData);
            const req = await axios.patch("/api/items/update", reqData);
            console.log(req.data);
            const updatedItem=req.data;
            console.log(updatedItem)
          
            const updatedBdd = bdd.map((item, index) => {
                if (index === 1) {
                    return item.map(el => (el.id === updatedItem.id ? updatedItem : el));
                }
                return item;
            });

            setBdd(updatedBdd);
            console.log(tab);
            setRedirect(true)
           
           
        } catch (error) {
            console.error('Error posting new category', error);
        }
    };

    if (redirect) {
        return <Navigate to="../items" />;
    }

    return (
        <>
            <form onSubmit={sub} className="w-11/12 md:w-fit
             md:px-20 md:py-8 bg-white/5 gap-4 flex flex-col items-center justify-start border-4 border-blue-900 py-8 text-white rounded-md">
                <NavLink to="../items" className="px-4 py-1 rounded-md ring-green-600 ring-4 text-slate-50 flex justify-center items-center font-semibold text-xl bg-slate-800"> Return </NavLink>        
                <div className="w-full flex justify-center gap-2 items-center">
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
                        type="number"
                        min="0"
                        name="unit"
                        id="unit"
                        value={unit}
                        onChange={e => setUnit(e.target.value)}
                    />
                </div>
                <div className="w-full justify-center flex gap-2 items-center">
                    <label htmlFor="description" className="font-semibold text-xl">Desc:</label>
                    <input
                        className="peer text-black bg-transparent outline-none px-2 text-base rounded-xl bg-white border-[3px] border-[#4070f4] focus:shadow-md py-[2px]"
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="w-fit gap-2 flex flex-col items-center">
                    <label className="font-semibold text-xl">Categories:</label>
                    <div className="w-full">
                        {categories.map(category => (
                            <div key={category.id} className="flex gap-2 font-semibold">
                                <input
                                    type="checkbox"
                                    id={`category-${category.id}`}
                                    name="categories"
                                    value={category.name}
                                    className="w-4"
                                    checked={selectedCategories.includes(category.id)}
                                    onChange={() => handleCheckboxChange(category.id)}
                                />
                                <label htmlFor={`category-${category.id}`}>{category.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit" className="px-4 py-1 rounded-md ring-green-600 ring-4 text-slate-50 flex justify-center items-center font-semibold text-xl bg-slate-800 my-2">Update</button>
            </form>
        </>
    );
}

export default EditeIte;
