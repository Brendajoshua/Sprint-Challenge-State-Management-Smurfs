import React from "react";
import { useDispatch } from "react-redux";
import { deleteSmurf, setSmurfToEdit } from "../actions";
import {images, getRandomInt} from './helpers'

function Smurf({ smurf }) {
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteSmurf(id))

    }
    const changeSmurfToEdit = smurf => {
        dispatch(setSmurfToEdit(smurf));
      }
    return (
        <div>
            <h2>{smurf.name}</h2>
            <img src={images[getRandomInt(0,images.length-1)]} alt="smurf"/>
            <p>Age: {smurf.age} years</p>
            <p>Height: {smurf.height}</p>
            <button onClick={() => changeSmurfToEdit(smurf)}>edit smurf</button>
            <button onClick={() => handleDelete(smurf.id)}>delete smurf</button>
        </div>
    )
}

export default Smurf;