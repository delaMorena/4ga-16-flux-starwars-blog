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
            <div className= "card-container">
                {store.people.map((person,index) => 
                    <Card key={index} resource= "people" id= {index}> 
                        <h5 className= "card-title">Nombre: {person.name}</h5>
                        <p className= "card-text">Gender: {person.gender}</p>
                        <p className= "card-text">Eye color: {person.eye_color}</p>
                    </Card>
                )}
            </div>
              <h1>Planets</h1>
            <div className= "card-container">
                {store.planets.map((planet,index) => 
                    <Card key={index} resource= "planets" id= {index}> 
                        <h5 className= "card-title">Nombre: {planet.name}</h5>
                        <p className= "card-text">Population: {planet.population}</p>
                        <p className= "card-text">Terrain: {planet.terrain}</p>
                    </Card>
                )}
            </div>
            
            
        </div>
    )
}