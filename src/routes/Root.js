import React from "react";
import {Link, Outlet} from "react-router-dom";

const Root = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    <Link className="link" to={'/'}>Vegan Valley</Link>
                    <img src="./logo.png" />
                </div>
                <div className="navbar-middle">
                    <Link className="link" to={'/about'}>About Us</Link>
                    <Link className="link" to={'/menu'}>Our Menu</Link>
                </div>
                <div className="navbar-right">
                    <h1>R</h1>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Root;