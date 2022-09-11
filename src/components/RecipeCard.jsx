import React from 'react';
import { Link } from 'react-router-dom';


const RecipeCard = (props) => {
  return (
    <div className="cardMain">
      <div className="imgMain">
        <img className='ImgCard' src={props.image} alt="food_pic" />
      </div>

      <div className="cardDetails">
        <div className="cardHeader">
          <h2>{props.name}</h2>
          <img className='countryFlag' src={props.flag} alt="flag" />
        </div>
        <div className="cardInfoMain">
          <p>{props.description}</p>
        </div>
      </div>
      <Link className="linkCard" to={props.name} state={props.data}>
        See more!
        </Link>
    </div>
  );
};

export default RecipeCard;
