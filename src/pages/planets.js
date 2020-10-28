import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/index.js";

export default function(props) {
    const params = useParams()
    const { store, actions } = useContext(Context);

    let person = store.planets[params.index] // PARA DETERMINAR EL ID DE CADA PLANETA SEGUN EL ARRAY
    console.log(person);
    

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Planet: {planets.name}</h1>
            </div>
        </div>
    )
}