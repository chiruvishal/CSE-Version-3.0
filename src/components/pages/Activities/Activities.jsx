import React, { useState } from 'react';
import './Activites.css';

export default function Activities() {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cards, setCards] = useState([]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    generateCards(event.target.value, selectedCategory);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    generateCards(selectedYear, event.target.value);
  };

  const generateCards = (year, category) => {
    const generatedCards = [];

    const sampleData = [
      {
        imageUrl: 'medal_image1.jpg',
        name: 'John Doe',
        description: 'Gold Medalist',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        year: '2021',
        category: 'Student Achievements',
      },
      {
        imageUrl: 'medal_image2.jpg',
        name: 'Jane Smith',
        description: 'Silver Medalist',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        year: '2021',
        category: 'Student Achievements',
      },
      {
        imageUrl: 'medal_image3.jpg',
        name: 'Alex Johnson',
        description: 'Bronze Medalist',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        year: '2022',
        category: 'Department Achievements',
      },
      {
        imageUrl: 'medal_image4.jpg',
        name: 'Sarah Wilson',
        description: 'Gold Medalist',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        year: '2023',
        category: 'Department Achievements',
      },
    ];

    let filteredData = sampleData;

    if (year !== '') {
      filteredData = filteredData.filter((data) => data.year === year);
    }

    if (category !== '') {
      filteredData = filteredData.filter((data) => data.category === category);
    }

    generatedCards.push(...filteredData);
    setCards(generatedCards);
  };

  return (
    <div className="activities-container">
      <h1 className="consulting">Activities</h1>

      <div className="dropdown-container">
        <label htmlFor="year">Year:</label>
        <select id="year" value={selectedYear} onChange={handleYearChange}>
          <option value="">Select Year</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select Category</option>
          <option value="Student Achievements">Student's achievements</option>
          <option value="Department Achievements">
            Department Achievements
          </option>
        </select>
      </div>

      <div className="slider-container">
        <div className="card-slider">
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <div key={index} className="card">
                <div className="card-image-container">
                  <div className="card-image-circle">
                    <img
                      src={card.imageUrl}
                      alt={card.name}
                      className="card-image"
                    />
                  </div>
                </div>
                <div className="card-details">
                  <h2 className="card-title">{card.name}</h2>
                  <p className="card-description">{card.description}</p>
                  <p className="card-content">{card.content}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-cards-message">No cards to display.</p>
          )}
        </div>
      </div>
    </div>
  );
}
