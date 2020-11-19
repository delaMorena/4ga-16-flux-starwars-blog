import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/index.js";

export default function(props) {

    const { store, actions } = useContext(Context);
    const [listFav, setListFav] = useState(['R2D2'])

    useEffect(()=> {
        console.log("listFav: ", listFav);
        setListFav(actions.getFavorites());
        console.log("listFav después de setListFav: ", listFav);
        

    },[])

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Favorites
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
            {listFav.map( (fav, index) =>  { 
                return (<a className="dropdown-item" key= 'index' href="#">Luck Skywalker</a>)
            })
            }   
            <h6 className="dropdown-item text-secondary" key= 'index' href="#">{listFav}</h6>  
            </div>
        </div>
    )  
}
