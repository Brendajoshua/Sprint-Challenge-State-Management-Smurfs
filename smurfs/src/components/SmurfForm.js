import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSmurf, editSmurf } from "../actions";

function SmurfForm() {
    const [input, setInput] = useState({ name: "", age: "", height: "" });
    const dispatch = useDispatch();
    const smurfToEdit = useSelector(state => state.smurfToEdit);

    const handleInputChange = event => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!smurfToEdit) {
        dispatch(
            addSmurf({ ...input, id: Date.now() })
            );
        } else {
            dispatch(editSmurf(input));
        }
        setInput({ name: "", age: "", height: "" });
    };

    useEffect(() => {
        if (smurfToEdit) setInput({...smurfToEdit});
      }, [smurfToEdit])

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Smurf Name:
                <input
                name="name"
                value={input.name}
                onChange={handleInputChange}
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
                name="height"
                value={input.height}
                onChange={handleInputChange}
                type="text"
                placeholder="height in cm"
                />
            </label>
            <button>{ smurfToEdit ? 'edit smurf' : 'add smurf' }</button>
        </form>
    );
}

export default SmurfForm;