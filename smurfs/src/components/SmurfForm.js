import React, { useState } from "react";

function SmurfForm() {
    const [input, setInput] = useState({ name: "", age: "", height: "" });
    const handleInputChange = event => {
        setInput({...input, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        setInput({ name: "", age: "", height: "" });
    }

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