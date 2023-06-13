import React, { useState, useEffect } from 'react';
import './TopAchievementsHome.css';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import LazyLoad from 'react-lazyload';

export default function TopAchievements() {
  const topAchievements = [
    {
      name: 'TopAchievementsss 2023',
      cards: [
        {
          imageUrl: 'medal_image1.jpg',
          achiename: 'John Doe',
          description: 'Gold Medalist',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          year: '2021',
          category: 'Student Achievements',
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
  ];

  const [selectedEvent, setSelectedEvent] = useState(topAchievements[0]);
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
    animateGallery ? 'animate_animated animate_fadeInUp' : ''
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

  const handleEventSelect = (achievements) => {
    setSelectedEvent(achievements);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
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
                        .slice(0, showMore ? selectedEvent.cards.length : 6)
                        .map((slide, index) => (
                          <LazyLoad key={index} height={200} offset={100} once>
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
                                  <h2 className="name">{slide.achiename}</h2>
                                  <p className="description">
                                    {slide.description}
                                  </p>
                                  <p className="content">{slide.content}</p>
                                  <button className="button">View More</button>
                                </div>
                              </div>
                            </div>
                          </LazyLoad>
                        ))}
                  </div>

                  {selectedEvent.cards.length > 6 && (
                    <div className="showMoreButton">
                      <button className="button1" onClick={toggleShowMore}>
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
  );
}
