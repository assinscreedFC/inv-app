import { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";

function CreateCat() {
    const [val, setVal] = useState("");
    const [redirect, setRedirect] = useState(false);

    const sub = (e) => {
        e.preventDefault();
        console.log(val);
        setRedirect(true);
    };

    if (redirect) {
        return <Navigate to="/categories" />;
    }

    return (
        <>
            <form onSubmit={sub} className="w-11/12  flex items-center flex-col  rounded-md border-4 border-blue-900 gap-4 p-4">
            <NavLink to="../categories" className="w-full flex justify-center items-center font-semibold text-xl">Return</NavLink>
                <div className="flex w-full gap-4 justify-center flex-col items-center">
                <div className="">
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="w-1/2"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
                </div>
               
                <button type="submit">Send</button>
                </div>
               
            </form>
        </>
    );
}

export default CreateCat;
