import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Achievements.css';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Achievements() {
  const achievement = [
    {
      name: 'achievements 2023',
      cards: [
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxSsttf-3xG2xjCs4i5slPn__SDHoEtouzMnj56MLfIucdXbAjmWZFKlQ-pUah2Bn5mQ&usqp=CAU',
          achiename: 'John Doe',
          description: 'Gold Medalist',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          imageUrl:
            'https://st3.depositphotos.com/2056297/14633/i/600/depositphotos_146330135-stock-photo-portrait-of-sexy-man.jpg',
          achiename: 'Alex Johnson',
          description: 'Bronze Medalist',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzoRCUpOk1hwIJtkV44PE2jE7MhmpdhbZnA&usqp=CAUmedal_image4.jpg',
          achiename: 'Sarah Wilson',
          description: 'Gold Medalist',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/3/31/My-Passport-Size%28Small-Beard%29-1MB.jpg',
          achiename: 'Sarah Wilson',
          description: 'Gold Medalist',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          imageUrl:
            'https://st3.depositphotos.com/2056297/14633/i/600/depositphotos_146330135-stock-photo-portrait-of-sexy-man.jpg',
          achiename: 'Alex Johnson',
          description: 'Bronze Medalist',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          year: '2022',
          category: 'Department Achievements',
        },
        {
          imageUrl: 'medal_image4.jpg',
          achiename: 'Sarah Wilson',
          description: 'Gold Medalist',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          year: '2023',
          category: 'Department Achievements',
        },
      ],
    },
    {
      name: 'Achuevements 2023',
      cards: [
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxSsttf-3xG2xjCs4i5slPn__SDHoEtouzMnj56MLfIucdXbAjmWZFKlQ-pUah2Bn5mQ&usqp=CAU',
          achiename: 'John Doe',
          description: 'Gold Medalist',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          imageUrl:
            'https://st3.depositphotos.com/2056297/14633/i/600/depositphotos_146330135-stock-photo-portrait-of-sexy-man.jpg',
          achiename: 'Alex Johnson',
          description: 'Bronze Medalist',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzoRCUpOk1hwIJtkV44PE2jE7MhmpdhbZnA&usqp=CAUmedal_image4.jpg',
          achiename: 'Sarah Wilson',
          description: 'Gold Medalist',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/3/31/My-Passport-Size%28Small-Beard%29-1MB.jpg',
          achiename: 'Sarah Wilson',
          description: 'Gold Medalist',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    },
  ];
  const [selectedEvent, setSelectedEvent] = useState(achievement[0]);
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
        setLoadedImages(selectedEvent.cards.length);
        setLoadingMore(false);
      }, 2000);
    }
  }, [loadingMore]);

  useEffect(() => {
    if (galleryInView) {
      setAnimateGallery(true);
    }
  }, [galleryInView]);

  const handleEventSelect = (achievement) => {
    setSelectedEvent(achievement);
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
              <div className="green-line-text">Achievements</div>
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
                  <Link to="/Course">Course</Link>
                </li>
                <li>
                  <div className="side-border-left" />
                  <Link to="/Alumini-Network">Alumini-Network</Link>
                </li>
                <li>
                  {' '}
                  <div className="side-border-left" />
                  <Link to="/Gallery">Gallery</Link>
                </li>
                <li>
                  {' '}
                  <div className="side-border-left" />
                  <Link to="/StudentSection">Student Section</Link>
                </li>
                <li>
                  {' '}
                  <div className="side-border-left" />
                  <Link to="/Activities">Activities</Link>
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
                  {achievement.map((achievement, index) => (
                    <li
                      key={index}
                      className={
                        selectedEvent.name === achievement.name ? 'active' : ''
                      }
                      onClick={() => handleEventSelect(achievement)}
                    >
                      {achievement.name}
                    </li>
                  ))}
                </ul>
                <p style={{ color: 'white' }}>
                  To view the more information about the achievement click on
                  know more.
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
                          <span>NITRR-Achievements LOADING...</span>
                        </div>
                      ) : (
                        <>
                          <div className="galleryWrap">
                            {selectedEvent.cards &&
                              selectedEvent.cards
                                .slice(
                                  0,
                                  showMore ? selectedEvent.cards.length : 6
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
                                          ? 'animate_animated animate_fadeInUp'
                                          : ''
                                      }`}
                                    >
                                      <div className="card">
                                        <div className="image-content">
                                          <span className="overlay" />
                                          <div className="card-image">
                                            <img
                                              src={slide.imageUrl}
                                              alt={slide.achiename}
                                              className="card-img"
                                            />
                                          </div>
                                        </div>
                                        <div className="card-content">
                                          <h2 className="name">
                                            {slide.achiename}
                                          </h2>
                                          <p className="description">
                                            {slide.description}
                                          </p>
                                          <p className="content">
                                            {slide.content}
                                          </p>
                                          <button className="button">
                                            View More
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </LazyLoad>
                                ))}
                          </div>

                          {selectedEvent.cards.length > 6 && (
                            <div className="showMoreButton">
                              <button
                                className="button1"
                                onClick={toggleShowMore}
                              >
                                {showMore ? 'Show Less' : 'Show More'}
                              </button>
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
