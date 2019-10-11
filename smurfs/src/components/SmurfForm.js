import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSmurf } from "../actions";

function SmurfForm() {
    const [input, setInput] = useState({ name: "", age: "", height: "" });
    const dispatch = useDispatch();

    const handleInputChange = event => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(
            addSmurf({...input, height: `$input.height}cm`, id: Date.now() })
            );
        setInput({ name: "", age: "", height: "" });
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Smurf Name:
                <input
                name="name"
                value={input.name}
                onchange={handleInputChange}
                type="text"
                placeholder="enter name.."
                />
            </label>
            <label>
                Age:
                <input
                name="age"
                value={input.age}
                onChange={handleInputChange}
                type="number"
                placeholder="enter age.."
                />
            </label>
            <label>
                Height:
                <input
                name="Height"
                value={input.height}
                onChange={handleInputChange}
                type="number"
                placeholder="height in cm"
                />
            </label>
            <button>add smurf</button>
        </form>
    )
}

export default SmurfForm;