import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const [recipies, setRecipies] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  // Here is an example of how we can do Promise.all with Axios. First, we define separated axios.get methods and then we use these in useEffect and connect those in Promise.all method.

  const getRecipes = () => axios.get('http://localhost:3001/recipies');
  const getCountries = () => axios.get('https://restcountries.com/v2/all');

  useEffect(() => {
    setLoading(true);
    Promise.all([getRecipes(), getCountries()]).then(function (results) {
      const recipesData = results[0];
      const countriesData = results[1]; // because countries starts from first index

      setRecipies(recipesData.data);
      setCountries(countriesData.data);

      setLoading(false);
    });
  }, []);

  // conditional rendering
  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      {recipies.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          data={recipe}
          country={countries.find(
            (country) => country.alpha2Code === recipe.country_code
          )}
          {...recipe}
        />
      ))}
    </div>
  );
};

export default RecipeList;
