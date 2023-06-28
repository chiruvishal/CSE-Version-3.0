import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts } from "./../../../actions/gallery"
;
import './Gallary.css';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import LazyLoad from 'react-lazyload';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import "react-loading-skeleton/dist/skeleton.css";


const Posts=(props)=>{
  const posts = useSelector((state) => state.posts);
  //
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDelay, setLoadingDelay] = useState(5000); // 5 seconds
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
        setLoadedImages(selectedEvent.image.length);
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
      ? setSlideNumber(selectedEvent.image.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === selectedEvent.image.length
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

const HPost = ({  setCurrentId, post })=>{
  const dispatch = useDispatch();
  return(
    <li
      item key={post._id}
      className={
        post.title ? 'active' : ''
      }
      onClick={() => handleEventSelect(post)}
    >
      {post.title}
    </li>
  );
};
useEffect(() => {
  const loadingTimer = setTimeout(() => {
    setLoadingDelay(0);
  }, 5000);

  return () => {
    clearTimeout(loadingTimer);
  };
}, []);

  return(
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
                  <Link to="/Course">Course</Link>
                </li>
                <li>
                  <div className="side-border-left" />
                  <Link to="/AluminiNetwork">Alumini-Network</Link>
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
              {loadingDelay > 0 ? (
            <div style={{ width: "100%", maxHeight: "100%" }}>
        <SkeletonTheme baseColor="#2229a3" highlightColor="#edd3f1">
          <p>
            <Skeleton count={3} />
          </p>
        </SkeletonTheme>
      </div>
        ) :(
                <ul>
                  {posts.map((post) =>
                    (post.tags===props.tag ?(

                      <div item key={post._id}>
                    <HPost setCurrentId={props.setCurrentId} post={post} />
                  </div>):null
                  ))}
                </ul>
        )}
                <p style={{ color: 'white' }}>
                  To view the image in fullscreen mode, please click on it.
                </p>
              </div>
            </div>
            <div ref={galleryRef}>
              {galleryInView && (
                <div className="Aiml galleryg wel" style={{ paddingLeft: '1rem' }}>
                  {selectedEvent && (
                    <div >
                      <div className="areafd">
                        <p>{selectedEvent.title}</p>
                      </div>

                      {isLoading ? (
                        <div className="skeleton-container">
            <SkeletonTheme baseColor="#2229a3" highlightColor="#edd3f1">
              <div className="skeleton-row">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="skeleton-box">
                    <Skeleton width={300} height={200} />
                  </div>
                ))}
              </div>
            </SkeletonTheme>
          </div>
                      ) : (
                        <>
                          <div className="galleryWrap">
                            {selectedEvent.image &&
                              selectedEvent.image
                                .slice(
                                  0,
                                  showMore ? selectedEvent.image.length : 6
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
                                        <img src={slide} alt="" />
                                      ) : (
                                        <img src={slide} alt="" />
                                      )}
                                    </div>
                                  </LazyLoad>
                                ))}
                          </div>

                          {selectedEvent.image.length > 6 && (
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
                                    selectedEvent.image[slideNumber]
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
                  {!selectedEvent && (
        <div className="noEventSelected">
          <h4>Select an event to see images</h4>
        </div>
      )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

const Gallary=(props)=>{
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
        <Posts setCurrentId={setCurrentId} tag={props.tag}  />
  );

};


export default Gallary;