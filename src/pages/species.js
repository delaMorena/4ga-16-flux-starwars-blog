import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/index.js";

export default function(props) {
    const params = useParams()
    const { store, actions } = useContext(Context);

    let specie = store.species[params.index] 
    // store.people te lleva a los personajes
     // [params.index] te da la posicion del personaje selccionado en la card que has pinchado
    

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Planet: {species.name}</h1>
            </div>
        </div>
    )
}