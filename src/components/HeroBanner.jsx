import React from "react";
import { Link } from "react-router-dom";
import cookingGif from "./assets/cookingGif.gif";

const HeroBanner = () => {
    return (
        <div className="banner">
            <div>
                <img src={cookingGif} alt="cooking in pan" className="gif"/>
            </div>
            <div className="heading">
                <h1>TasteIT</h1>
                <p>The famous recipe search and editing app</p>
                <button className="hero-btn">
                    <Link to="recipeList" className="hero-btn-link">Browse our Recipies</Link>
                </button>
            </div>
        </div>
    );
};

export default HeroBanner;