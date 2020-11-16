import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container d-flex justify-content-between">
                    <span className="navbar-brand">
                    <Link to="/">
                        <img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy">
                    </img>
                    </Link>
                    
                    </span>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Favorites
                        </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                            </div>
                    </div>
                </div>
            
        </nav>
    )
}