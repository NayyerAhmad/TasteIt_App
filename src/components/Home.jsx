import React from "react";
import HeroBanner from "./HeroBanner";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    // empty tag because return function returns only one value
    <>
    <HeroBanner />
    <main>
      <h2 className="title">Searching for recipes?!?</h2>
      <div className="card-list">
        <div className="home-card">
          <p>Browse Recipes <br />
            Search for the rcipes based on the recipe name or country
          </p>
          <Link to="/RecipeList">All Recipes</Link>
        </div>
        <div className="home-card">
          <p>Add Recipe <br />
            Help the cooking community with your recipes!
          </p>
          <Link to="/RecipeForm">Add Your Recipe</Link>
        </div>
        <div className="home-card">
          <p>Read more about our projects </p>
          <a href="https://bc.fi" target="_blank">Business College Helsinki</a>
        </div>
      </div>
    </main>
    </>
  )
};

export default Home;
