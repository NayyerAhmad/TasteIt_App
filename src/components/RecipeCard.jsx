import React from 'react';
import { Link } from 'react-router-dom';

// used destructured props

const RecipeCard = ({ name, desc, img, data, country }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{desc}</p>
      <img src={img} alt={name} />
      <img src={country.flag} alt={country.name} />
      <div>
        <Link to={name} state={{ data: data, country: country }}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
