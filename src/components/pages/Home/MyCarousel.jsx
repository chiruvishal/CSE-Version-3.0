import React from 'react';
import Slider from 'infinite-react-carousel';

var cloud_mountains =
  'https://i.postimg.cc/jSxs1Qjc/Whats-App-Image-2023-05-31-at-15-17-11.jpg';
var groups =
  'https://i.postimg.cc/vmDGYYf6/Whats-App-Image-2023-05-31-at-01-31-31.jpg';
var hills =
  'https://i.postimg.cc/g0wP9MbV/Whats-App-Image-2023-05-26-at-23-44-04.jpg';
import './MyCarousel.css';

function MyCarousel() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    className: 'slide_box',
    dots: false,
    virtualList: true,
    duration: 20,
    arrows: true,
  };
  return (
    <div className="carsel">
      <div className="part1">
        <img
          src={cloud_mountains}
          className="slide_img col-lg-12"
          alt="Responsive img"
        />
        <div className="img_overlay">
          <div class="gfg">
            <div class="gfgcard">
              <div class="content">
                <h2>Hello !!!</h2>
                <p>
                  Welcome to the CSE department of NIT Raipur! As one of the
                  premier institutions in India, we pride ourselves on offering
                  a dynamic and innovative learning environment for aspiring
                  computer science engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="part2">
        <Slider {...settings}>
          <div className="row">
            <img
              src={cloud_mountains}
              className="slide_img col-lg-12"
              alt="Responsive img"
            />
          </div>
          <div className="row">
            <img
              src={groups}
              className="slide_img col-lg-12"
              alt="Responsive img"
            />
          </div>
          <div className="row">
            <img
              src={hills}
              className="slide_img col-lg-12"
              alt="Responsive img"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default MyCarousel;
