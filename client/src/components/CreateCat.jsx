import { useState } from "react"

function CreateCat(){
    const [val,setval]=useState("")

    const sub=(e)=>{
        e.preventDefault();
        console.log(val);
    }
    return(
        <>
            <form action="" method="post" onSubmit={sub}>
                <label htmlFor="title">title: </label>
                <input type="text" name="title" id="title" value={val} onChange={e =>setval(e.target.value)} />
                <button type="submit" >Send</button>
            </form>
        
        </>
    )
}

export default CreateCat