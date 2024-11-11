import React from "react";
import "./Header.css"

const Header = () => {
        return (
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/" className="logo"><h1>Vegan Valley</h1></a>
                </div>
                <div className="navbar-center">
                    <ul className="nav-links">
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                </div>
            </nav>
        )
}

export default Header;