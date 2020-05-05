import React from "react";
import { useHistory, Link } from "react-router-dom";

const NavBar = () => {
    // const { location } = useHistory

    return (
        <div className="NavBar">
            <Link to="/">
                <h1 className="Title">Lambda Eats Fresh</h1>
            </Link>

            <nav className="nav-tab">
                <Link className="homelink" to="/">Home</Link>

                <Link className="pizzalink" to="/pizza">Pizza Order</Link>
            </nav>
        </div>
    )
}

export default NavBar;