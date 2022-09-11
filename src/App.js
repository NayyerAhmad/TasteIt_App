import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import RecipeSingle from './components/RecipeSingle';
import Layout from "./pagehandling/handler"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipeList" element={<RecipeList/>} />
        <Route path="recipeForm" element={<RecipeForm/>} />
        <Route path="recipeSingle/:id" element={<RecipeSingle/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
