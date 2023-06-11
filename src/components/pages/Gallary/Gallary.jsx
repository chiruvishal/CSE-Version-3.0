import React, { useState, useEffect } from 'react';
import './Gallary.css';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import LazyLoad from 'react-lazyload';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

export default function Gallary() {
  const events = [
    {
      name: 'Farewell 2023',
      images: [
        {
          original:
            'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
          thumbnail: 'https://i.postimg.cc/SKWTw8GW/nit3e3e23e-min.jpg',
        },
        {
          original:
            'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
          thumbnail: 'https://i.postimg.cc/SKWTw8GW/nit3e3e23e-min.jpg',
        },
        {
          original:
            'https://i.postimg.cc/XqLsZ0NR/c6454d4d-4ee3-4844-9f86-4befa39cab8b.jpg',
          thumbnail: 'https://i.postimg.cc/SKWTw8GW/nit3e3e23e-min.jpg',
        },
        {
          original:
            'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
          thumbnail: 'https://i.postimg.cc/SKWTw8GW/nit3e3e23e-min.jpg',
        },
        {
          original:
            'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
          thumbnail: 'https://i.postimg.cc/SKWTw8GW/nit3e3e23e-min.jpg',
        },
        {
          original:
            'https://i.postimg.cc/XqLsZ0NR/c6454d4d-4ee3-4844-9f86-4befa39cab8b.jpg',
          thumbnail: 'https://i.postimg.cc/SKWTw8GW/nit3e3e23e-min.jpg',
        },
        {
          original:
            'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
          thumbnail: 'https://i.postimg.cc/SKWTw8GW/nit3e3e23e-min.jpg',
        },
        {
          original:
            'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
          thumbnail: 'https://i.postimg.cc/SKWTw8GW/nit3e3e23e-min.jpg',
        },
        {
          original:
            'https://i.postimg.cc/XqLsZ0NR/c6454d4d-4ee3-4844-9f86-4befa39cab8b.jpg',
          thumbnail: 'https://i.postimg.cc/SKWTw8GW/nit3e3e23e-min.jpg',
        },
        // Add more images for the farewell event
      ],
    },
    {
      name: 'Welcome Party',
      images: [
        {
          original:
            'https://i.postimg.cc/G2JQN1D4/2824932f-48db-4606-8052-c0829d8a7565.jpg',
          thumbnail: 'https://i.postimg.cc/SKWTw8GW/nit3e3e23e-min.jpg',
        },
        {
          original:
            'https://i.postimg.cc/GhMMdr5Y/e22ceac9-c82a-4a3b-9d2c-b5697292df3d.jpg',
          thumbnail: 'https://i.postimg.cc/SKWTw8GW/nit3e3e23e-min.jpg',
        },
        {
          original:
            'https://i.postimg.cc/XqLsZ0NR/c6454d4d-4ee3-4844-9f86-4befa39cab8b.jpg',
          thumbnail: 'https://i.postimg.cc/SKWTw8GW/nit3e3e23e-min.jpg',
        },

        // Add more images for Event 2
      ],
    },
    // Add more event objects as needed
  ];

  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '0px',
    trackVisibility: true,
    delay: 200,
    initialInView: false,
    skip: false,
    debounce: 0,
    scrollableAncestor: null,
    unobserveOnEnter: false,
    onEnter: () => {
      setAnimateGallery(true);
    },
    onLeave: () => {
      setAnimateGallery(false);
    },
  });

  const [animateGallery, setAnimateGallery] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedImages, setLoadedImages] = useState(6);
  const galleryClassName = `gallery ${
    animateGallery ? 'animate__animated animate__fadeInUp' : ''
  }`;
  const toggleShowMore = () => {
    setLoadingMore(true);
    setShowMore((prevState) => !prevState);
  };

  useEffect(() => {
    if (loadingMore) {
      setTimeout(() => {
        setLoadedImages(selectedEvent.images.length);
        setLoadingMore(false);
      }, 2000);
    }
  }, [loadingMore]);

  useEffect(() => {
    if (galleryInView) {
      setAnimateGallery(true);
    }
  }, [galleryInView]);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(selectedEvent.images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === selectedEvent.images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <>
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: 'url(https://i.postimg.cc/FsMqtTSQ/IMG-2725.jpg)',
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: '60px' }}
            >
              <div className="green-line-text">Gallery</div>
            </div>
          </div>
        </div>
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
                  <Link to="/Publication">Gallery</Link>
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
          <div style={{ width: '100%' }}>
            <div className="student-box1" style={{ width: '100%' }}>
              <h3 className="student-box-heading1">
                "Enlightened Moments: Capturing NIT Raipur's Eventful Gallery"
              </h3>
              <div className="eventList">
                <ul>
                  {events.map((event, index) => (
                    <li
                      key={index}
                      className={
                        selectedEvent.name === event.name ? 'active' : ''
                      }
                      onClick={() => handleEventSelect(event)}
                    >
                      {event.name}
                    </li>
                  ))}
                </ul>
                <p style={{ color: 'white' }}>
                  To view the image in fullscreen mode, please click on it.
                </p>
              </div>
            </div>
            <div ref={galleryRef}>
              {galleryInView && (
                <div className="Aiml" style={{ paddingLeft: '1rem' }}>
                  {selectedEvent && (
                    <div className="gallery">
                      <div className="areahead">
                        <p>{selectedEvent.name}</p>
                      </div>

                      {isLoading ? (
                        <div className="loading">
                          <span>NITRR-GALLERY LOADING...</span>
                        </div>
                      ) : (
                        <>
                          <div className="galleryWrap">
                            {selectedEvent.images &&
                              selectedEvent.images
                                .slice(
                                  0,
                                  showMore ? selectedEvent.images.length : 6
                                )
                                .map((slide, index) => (
                                  <LazyLoad
                                    key={index}
                                    height={200}
                                    offset={100}
                                    once
                                  >
                                    <div
                                      className={`single ${
                                        animateGallery
                                          ? 'animate__animated animate__fadeInUp'
                                          : ''
                                      }`}
                                      onClick={() => handleOpenModal(index)}
                                    >
                                      {openModal && slideNumber === index ? (
                                        <img src={slide.original} alt="" />
                                      ) : (
                                        <img src={slide.thumbnail} alt="" />
                                      )}
                                    </div>
                                  </LazyLoad>
                                ))}
                          </div>

                          {selectedEvent.images.length > 6 && (
                            <div className="showMoreButton">
                              <button
                                className="button1"
                                onClick={toggleShowMore}
                              >
                                {showMore ? 'Show Less' : 'Show More'}
                              </button>
                            </div>
                          )}

                          {openModal && (
                            <div className="sliderWrap">
                              <div className="fullScreenImage">
                                <img
                                  src={
                                    selectedEvent.images[slideNumber].original
                                  }
                                  alt=""
                                />
                              </div>
                              <FontAwesomeIcon
                                icon={faCircleXmark}
                                className="btnClose"
                                onClick={handleCloseModal}
                              />
                              <FontAwesomeIcon
                                icon={faCircleChevronLeft}
                                className="btnPrev fa-2x"
                                onClick={prevSlide}
                              />
                              <FontAwesomeIcon
                                icon={faCircleChevronRight}
                                className="btnNext fa-2x"
                                onClick={nextSlide}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
