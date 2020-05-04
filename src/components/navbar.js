import React from "react";
import { useHistory, Link } from "react-router-dom";

const NavBar = () => {
    // const { location } = useHistory

    return (
        <div>
            <Link to="/">
                <h1>Lambda Eats Fresh</h1>
            </Link>

            <nav>
                <Link to="/">Home</Link>
                <br />
                <Link to="/pizza">Pizza Order</Link>
            </nav>
        </div>
    )
}

export default NavBar;