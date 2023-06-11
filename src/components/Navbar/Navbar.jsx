import React from "react";
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
import { ShoppingCart } from "phosphor-react";

export const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="links">
                <Link to="/">Main</Link>
                <Link to="/cart">
                    <ShoppingCart size={32}/>
                </Link>

            </div>
        </div>
    )
}