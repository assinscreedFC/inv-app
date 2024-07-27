import Carte from "../components/Carte.jsx"

function Items(){
    return (
        <div className="xl:w-11/12 lg:w-full bg-black flex flex-wrap gap-4 justify-center">
            
           <Carte/>
           <Carte/>
           <Carte/>
           <Carte/>
        </div>
    )
}

export default Items