import { useState } from "react";
import { Navigate } from "react-router-dom";

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
            <form onSubmit={sub}>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </>
    );
}

export default CreateCat;
