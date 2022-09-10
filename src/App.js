import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import RecipeSingle from './components/RecipeSingle';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/add_recipe">Add new recipe</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<RecipeList />} />
        <Route path="add_recipe" element={<RecipeForm />} />
        <Route path="recipes/:single" element={<RecipeSingle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
