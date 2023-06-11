import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './Achievements.css';

export default function Achievements() {
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
        imageUrl:
          'https://st3.depositphotos.com/2056297/14633/i/600/depositphotos_146330135-stock-photo-portrait-of-sexy-man.jpg',
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
      {
        imageUrl: 'medal_image1.jpg',
        name: 'John Doe',
        description: 'Gold Medalist',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        year: '2021',
        category: 'Student Achievements',
      },
      {
        imageUrl:
          'https://st3.depositphotos.com/2056297/14633/i/600/depositphotos_146330135-stock-photo-portrait-of-sexy-man.jpg',
        name: 'Jane Smith',
        description: 'Silver Medalist',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        year: '2021',
        category: 'Student Achievements',
      },
      {
        imageUrl:
          'https://st3.depositphotos.com/2056297/14633/i/600/depositphotos_146330135-stock-photo-portrait-of-sexy-man.jpg',
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

  useEffect(() => {
    const swiper = new Swiper('.slide-content', {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centeredSlides: true,
      fadeEffect: {
        crossFade: true,
      },
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <div className="main-box">
        <div className="side-box">
          <div className="side-container">
            <div className="side-top-box">
              <p>Student Zone</p>
            </div>

            <ul className="side-link">
              <li>
                <div className="side-border-left" />
                <Link to="/Course">Course</Link>
              </li>
              <li>
                <div className="side-border-left" />
                <Link to="/Alumini-Network">Alumini-Network</Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/Gallary">Gallary</Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/StudentSection">Student Section</Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/Achievements">Achievements</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="to-centerx">
          <div className="activities-container">
            <h1 className="consulting">Activities</h1>

            <div className="dropdown-container">
              <label htmlFor="year">Year:</label>
              <select
                id="year"
                value={selectedYear}
                onChange={handleYearChange}
              >
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
                <option value="Student Achievements">
                  Student's achievements
                </option>
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
                      <div className="image-content">
                        <span className="overlay" />
                        <div className="card-image">
                          <img
                            src={card.imageUrl}
                            alt={card.name}
                            className="card-img"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="name">{card.name}</h2>
                        <p className="description">{card.description}</p>
                        <button className="button">View More</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="no-cards-message">No cards to display.</p>
                )}
                <div class="swiper-button-next swiper-navBtn"></div>
                <div class="swiper-button-prev swiper-navBtn"></div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
