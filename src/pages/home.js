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
            <h1 className= "title">Character</h1>
            <div className= "card-container">
                {store.people.map((person,index) => 
                    <Card key={index} resource= "people" id= {index}> 
                        <h5 className= "card-title">{person.name}</h5>
                        <p className= "card-text">Gender: {person.gender}</p>
                        <p className= "card-text">Eye color: {person.eye_color}</p>
                    </Card>
                )}
            </div>
              <h1 className= "title">Planets</h1>
            <div className= "card-container">
                {store.planets.map((planet,index) => 
                    <Card key={index} resource= "planets" id= {index}> 
                        <h5 className= "card-title">{planet.name}</h5>
                        <p className= "card-text">Population: {planet.population}</p>
                        <p className= "card-text">Terrain: {planet.terrain}</p>
                    </Card>
                )}
            </div>
            <h1 className= "title">Species</h1>
            <div className= "card-container">
                {store.species.map((specie,index) => 
                    <Card key={index} resource= "species" id= {index}> 
                        <h5 className= "card-title">{specie.name}</h5>
                        <p className= "card-text">Population: {specie.classification}</p>
                        <p className= "card-text">Terrain: {specie.designation}</p>
                    </Card>
                )}
            </div>
            
            
        </div>
    )
}