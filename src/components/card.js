import React, { useContext } from "react";

import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)
    
    return (
        <div className="card"> 
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    {props.children}    
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>           
        </div>
    )
}