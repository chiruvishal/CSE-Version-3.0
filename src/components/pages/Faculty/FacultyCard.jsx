import React from 'react';
import { Link } from 'react-router-dom';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import FacultyDetails from './FacultyDetail';

const FacultyCard = ({ id, name, picture, Designition, email, phone }) => {
  const handleClick = () => {
    if (id <= 10) {
      // Perform specific action for ids less than or equal to 10
      console.log(`Clicked on faculty with id ${id}`);
    }
  };
 
  return (
    <div className="cardp">
      <div className="picture">
        {id <= 10 ? (
          <Link to={`/FacultyDetail?id=${id}`}>
            <img src={picture} alt={name} onClick={handleClick} />
          </Link>
        ) : (
          <img src={picture} alt={name} />
        )}
      </div>
      <div className="contact-details">
        <h4>{name}</h4>
        <p>{Designition}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default FacultyCard;
