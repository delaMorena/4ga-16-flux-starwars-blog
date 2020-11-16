import React, { useContext } from "react";
import { Link } from "react-router-dom";



export default function(props) {
    
    let path = "/"+props.resource+"/"+props.id; 
    console.log(path);
    let imgRandom = Math.floor((Math.random()*1000)+1)
    let pathImg = "https://picsum.photos/400/200?random="+imgRandom;
    
    
    return (
        <div className="card"> 
            <img src={pathImg} className="card-img-top" alt="..."/>
                <div className="card-body">
                    {props.children}    
                    <Link to={path} className="btn btn-outline-primary" id="button-info">Learn More!</Link>
                </div>           
        </div>
    )
}