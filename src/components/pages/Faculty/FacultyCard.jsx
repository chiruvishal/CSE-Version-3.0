import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FacultyDetails from './FacultyDetail';

const FacultyCard = ({ id, name, picture, Designition, email, phone }) => {
  const handleImageClick = () => {
    window.location.href = `/FacultyDetail?id=${id}`; // Replace '/sisodia-page' with the actual URL or route where you want to redirect
  };

  return (
    <div className="cardp">
      <div className="picture">
        <img src={picture} alt={name} onClick={handleImageClick} />
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
