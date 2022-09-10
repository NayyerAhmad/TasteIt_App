import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/" className="link-logo"> <h2 className="logo">TasteIT</h2></Link> 
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/recipeList">Reipes</Link>
                    </li>
                    <li>
                        <Link to="/recipeForm">Add New Recipe</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;