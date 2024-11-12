import React from "react";
import {Link} from "react-router-dom";

const Root = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link className="logo" to={'/'}>Vegan Valley</Link>
            </div>
        </nav>
    )
}

export default Root;