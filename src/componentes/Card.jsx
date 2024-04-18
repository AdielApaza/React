import React from 'react';
import Userdetails from './Users.jsx';
import "./Card.css";

function Card({ character }) {
  return (
    <div className="container">
      <Userdetails character={character} />
    </div>
  );
}

export default Card;
