import { NavLink , useParams} from "react-router-dom";
import Carte from "../components/Carte.jsx";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BddContext } from "../App.jsx";


function Items() {
  const {bdd,setbdd}=useContext(BddContext);
  const [rr, setRr] = useState([]);
  const { name } = useParams();
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [Cat, Item] = await Promise.all([
  //         axios.get("/api/table/categories"),
  //         axios.get("/api/table/items"),
  //       ]);
  //       console.log(Item.data.rows);
  //       setBdd([Cat.data.rows, Item.data.rows]);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (bdd.length > 0) {
      const items = bdd[1];
      let filteredItems = items;

      if (name) {
        const categoryIds = bdd[0].filter(cat => cat.name === name).map(cat => cat.id);
        filteredItems = items.filter(item => item.categories_id.some(catId => categoryIds.includes(catId)));
      }

      const itemComponents = filteredItems.map(el => (
        <Carte key={el.id} val={el} ite={el.categories_id} />
      ));

      setRr(itemComponents);
    }
  }, [bdd, name]);

  return (
    <div className="flex flex-col lg:w-full items-center gap-4">
      <NavLink to="new" className="px-4 w-fit py-1 rounded-md ring-green-600 ring-4 text-slate-50 flex justify-center items-center font-semibold text-xl bg-slate-800">NEW</NavLink>
      <div className="w-full flex flex-wrap gap-4 justify-center">
        {rr}
      </div>
    </div>
  );
}

export default Items;
