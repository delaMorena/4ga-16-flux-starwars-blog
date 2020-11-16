import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/index.js";

export default function(props) {
    const params = useParams()
    const { store, actions } = useContext(Context);

    let person = store.people[params.index] 
    // store.people te lleva a los personajes
    // [params.index] te da la posicion del personaje selccionado en la card que has pinchado
    return (
        <div className="jumbotron d-flex flex-row">
            <div className="left-side d-inline-block">
                <img src="https://picsum.photos/600/300?random=2">
                </img>
            </div>
            <div className="right-side d-inline-block">
                <h1>{person.name}</h1>
                <h5 className="description mx-5"> Lucas ipsum dolor sit amet lobot moff darth dooku mace jawa grievous padmé aayla mothma. R2-d2 jinn aayla antilles bothan darth. Solo twi'lek jabba skywalker obi-wan mothma solo.</h5>
            </div>
            
        </div>
    )
}