import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeForm = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    country_code: "",
    image: "",
    ingredients: [],
    instructions: "",
  });

  // Ingredients as a separated state which contains one object by default. When adding new ingredients, the array will have more objects.
  const [ingredients, setIngredients] = useState([
    { id: 1, ingredientName: "", quantity: "" },
  ]);

  // countries state is for saving data from restcountries API
  const [countries, setCountries] = useState([]);

  // Getting data for all 250 countries
  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  // basic onChange event for regular inputs
  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Bit more complicated event handler for getting data from ingredients. First, we spread the current ingredients state and then look for that specific object in the array. We use the index, which is passed to the event handler. After updating the value in inputs, we will overwrite the Data state and add the ingredients array.
  const changeIngredientData = (e, i) => {
    const { name, value } = e.target;
    const ingredientList = [...ingredients];
    ingredientList[i][name] = value;
    setIngredients(ingredientList);
    setData({ ...data, ingredients: ingredients });
  };

  // This event handler is reacting to our select event handler. We get the value from select, and then we find the correct alpha2Code. After that, we save valid code to the Data state.
  const changeCountry = (e) => {
    const correctCountry = countries.find((c) => c.name === e.target.value);
    setData({ ...data, country_code: correctCountry.alpha2Code });
  };

  // This event handler will add an empty ingredient object to the ingredients array.
  const addMore = (e) => {
    e.preventDefault();
    const newIngredient = { id: ingredients.length + 1, ingredientName: "", quantity: "" };
    setIngredients([...ingredients, newIngredient]);
  };

  // After we have all data collected from inputs, we post the Data object from state.
  const submitData = (e) => {
    axios.post('http://localhost:3001/recipies', data);
    // add message for submitting a recipe
    // const submitRecipe = document.createElement("p");
    // submitRecipe.innerHTML = "Successfully added your recipe!";
    // document.querySelector(".submitRecipe").appendChild(submitRecipe);
  };

  return (
    // Please note that you have to declare each input handler separately because we have three different kinds of input handlers. Otherwise, the latest handler will overwrite the previous ones.
    <div>
      <div>
        <h2>Add your recipe</h2>
      </div>
    <form onSubmit={submitData}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <textarea type="text" name="desc" id="desc" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="countryCode">Recipe is from:</label>
        <select name="country_code" id="countryCode" onChange={changeCountry}>
          {/* This is a way how you can dynamically create select options based on the array by using a simple mapping method.*/}
          {countries.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="img">Image url</label>
        <input type="url" name="img" id="img" onChange={changeData} />
      </div>
      <p>Ingredients</p>
      {ingredients.map((_, i) => {
        return (
          <div key={i}>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                onChange={(e) => changeIngredientData(e, i)}
              />
            </div>
            <div>
              <label htmlFor="ingredientName">Ingredient</label>
              <input
                type="text"
                name="ingredientName"
                id="ingredientName"
                onChange={(e) => changeIngredientData(e, i)}
              />
            </div>
          </div>
        );
      })}
      <button onClick={addMore}>Add more ingredients</button>
      <div>
        <label htmlFor="inst">Instructions</label>
        <textarea type="text" name="inst" id="inst" onChange={changeData} />
      </div>
      <input type="submit" value="Add recipe" />
    </form>
  </div>
  );
};

export default RecipeForm;
