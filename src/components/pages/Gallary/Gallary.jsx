import React from 'react';
import './Gallary.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
export default function Gallary() {
  const images = [
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: "https://i.postimg.cc/7bWN06Xs/Whats-App-Image-2023-01-14-at-00-01-54.jpg' border='0' alt='Whats-App-Image-2023-01-14-at-00-01-54",
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
  ];
  images.map((number) => ({
    src: `{number}`,
  }));
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
                <Link to="/Areas">Course</Link>
              </li>
              <li>
                <div className="side-border-left" />
                <Link to="/Project">Alumini-Network</Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/Publication">Gallary</Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/Publication">Student Section</Link>
              </li>
              <li>
                {' '}
                <div className="side-border-left" />
                <Link to="/Publication">Activities</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="tocenter">
        <div id="gallary" class="section-cotent">
      <div class="container1">
        <div class="title-section text-center gallary1">
          <h2>Media Coverage</h2>
          <span></span>
        </div>
        <Container className="container2">
          <div className="gallary">
            <Carousel
              className="gallaryRes"
              images={images}
              hasIndexBoard={false}
            />
          </div>
        </Container>
      </div>
    </div>
    </div>
      </div>
    </>
  );
}
