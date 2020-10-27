import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store";
import Card from "../components/card.js"

export default function(props) {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getPeople();
        actions.getPlanets();
        actions.getSpecies();
    },[]) 

    return (
        <div className="container">
            <h1>Character</h1>
            {store.people.map((person,index) => <Card key={index}> 
            <h5 className= "card-title">Nombre: {person.name}</h5>
            <p className= "card-text">Gender: {person.gender}</p>
            <p className= "card-text">Eye color: {person.eye_color}</p>
            </Card>
            )}
            <h1>Planets</h1>
            {store.planets.map((planet,index) => <Card key={index}> 
            <h5 className= "card-title">Nombre: {planet.name}</h5>
            <p className= "card-text">Population: {planet.population}</p>
            <p className= "card-text">Terrain: {planet.terrain}</p>
            </Card>
            )}
            <div className="card"> 
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                       
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>           
        </div>
        </div>
    )
}