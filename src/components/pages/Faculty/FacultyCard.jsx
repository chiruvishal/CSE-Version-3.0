import React from 'react';
import { Link } from 'react-router-dom';

const FacultyCard = ({ name, picture, Designition, email, phone }) => {
  const handleImageClick = () => {
    window.location.href = '/FacultyDetail'; // Replace '/sisodia-page' with the actual URL or route where you want to redirect
  };

  return (
    <div className="card">
      <div className="picture">
        <img src={picture} alt={name} onClick={handleImageClick} />
      </div>
      <div className="contact-details">
        <h3>{name}</h3>
        <p>{Designition}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default FacultyCard;
