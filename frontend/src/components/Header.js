import React from "react";
import {Link, link} from 'react-router-dom';

function Header(){

    return(
        //convert class as className
        //cannot use custome css style by "" use {{}}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/" style={{color:"red"}}>Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                 <Link to="/" className="nav-link active">HOME</Link> 
                <Link to="/add" className="nav-link">Create Student</Link>
            
            </div>
        </div>
        </nav>
    )
}

export default Header;