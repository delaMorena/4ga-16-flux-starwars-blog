import React, { useContext } from "react";
import { Link } from "react-router-dom";

// import { Context } from "../store"; POR QUÉ NO ES NECESARIO?

export default function(props) {
    // const { store, actions } = useContext(Context) POR QUÉ NO ES NECESARIO? 
    let path = "/"+props.resource+"/"+props.id; 
    console.log(path);
    
    return (
        <div className="card"> 
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    {props.children}    
                    <Link to={path} className="btn btn-primary" id="button-info">Learn More!</Link>
                </div>           
        </div>
    )
}