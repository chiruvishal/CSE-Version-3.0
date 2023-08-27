import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// import BlogCard from './BlogCard';
import { getPosts } from "./../../../actions/home";
import { Link } from 'react-router-dom';
import './Achievements.css';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Posts=(props)=> {
  // const achievement = [
  //   {
  //     name: 'achievements 2023',
  //     cards: [
  //       {
  //         imageUrl:
  //           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxSsttf-3xG2xjCs4i5slPn__SDHoEtouzMnj56MLfIucdXbAjmWZFKlQ-pUah2Bn5mQ&usqp=CAU',
  //         achiename: 'John Doe',
  //         description: 'Gold Medalist',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //       },
  //       {
  //         imageUrl:
  //           'https://st3.depositphotos.com/2056297/14633/i/600/depositphotos_146330135-stock-photo-portrait-of-sexy-man.jpg',
  //         achiename: 'Alex Johnson',
  //         description: 'Bronze Medalist',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //       },
  //       {
  //         imageUrl:
  //           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzoRCUpOk1hwIJtkV44PE2jE7MhmpdhbZnA&usqp=CAUmedal_image4.jpg',
  //         achiename: 'Sarah Wilson',
  //         description: 'Gold Medalist',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //       },
  //       {
  //         imageUrl:
  //           'https://upload.wikimedia.org/wikipedia/commons/3/31/My-Passport-Size%28Small-Beard%29-1MB.jpg',
  //         achiename: 'Sarah Wilson',
  //         description: 'Gold Medalist',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //       },
  //       {
  //         imageUrl:
  //           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmxW7AeJl9pvhROKaAajwyQAhEZlPtDS3vQ&usqp=CAU',
  //         achiename: 'Alex Johnson',
  //         description: 'Bronze Medalist',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //         year: '2022',
  //         category: 'Department Achievements',
  //       },
  //       {
  //         imageUrl:
  //           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzoRCUpOk1hwIJtkV44PE2jE7MhmpdhbZnA&usqp=CAUmedal_image4.jpg',
  //         achiename: 'Sarah Wilson',
  //         description: 'Gold Medalist',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //         year: '2023',
  //         category: 'Department Achievements',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Achuevements 2023',
  //     cards: [
  //       {
  //         imageUrl:
  //           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxSsttf-3xG2xjCs4i5slPn__SDHoEtouzMnj56MLfIucdXbAjmWZFKlQ-pUah2Bn5mQ&usqp=CAU',
  //         achiename: 'John Doe',
  //         description: 'Gold Medalist',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //       },
  //       {
  //         imageUrl:
  //           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmxW7AeJl9pvhROKaAajwyQAhEZlPtDS3vQ&usqp=CAU',
  //         achiename: 'Alex Johnson',
  //         description: 'Bronze Medalist',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //       },
  //       {
  //         imageUrl:
  //           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzoRCUpOk1hwIJtkV44PE2jE7MhmpdhbZnA&usqp=CAUmedal_image4.jpg',
  //         achiename: 'Sarah Wilson',
  //         description: 'Gold Medalist',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //       },
  //       {
  //         imageUrl:
  //           'https://upload.wikimedia.org/wikipedia/commons/3/31/My-Passport-Size%28Small-Beard%29-1MB.jpg',
  //         achiename: 'Sarah Wilson',
  //         description: 'Gold Medalist',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //       },
  //     ],
  //   },
  // ];
  const posts = useSelector((state) => state.posts);
  //
  // const [selectedEvent, setSelectedEvent] = useState(0);
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
    animateGallery ? 'animate_animated animate_fadeInUp' : ''
  }`;
  const toggleShowMore = () => {
    setLoadingMore(true);
    setShowMore((prevState) => !prevState);
  };

  useEffect(() => {
    if (loadingMore) {
      setTimeout(() => {
        setLoadedImages(posts.length);
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


    const Post = ({  setCurrentId, post })=>{
    const dispatch = useDispatch();

      return(
        <div
          className={`single ${
            animateGallery
              ? 'animate_animated animate_fadeInUp'
              : ''
          }`}
        >
          <div className="cardhar">
            <div className="image-content">
              <span className="overlay" />
              <div className="card-imagehar">
                <img
                  src={post.image}
                  className="card-imghar"
                />
              </div>
            </div>
            <div className="card-content">
              <h2 className="namez">{post.title}</h2>
              <p className="descriptionz">
                {post.creator}
              </p>
              <p className="content">{post.message}</p>
            </div>
          </div>
        </div>
      );

    };

  return posts.length ?(
    <>
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: 'url(https://i.postimg.cc/x1tQtmmL/DSS-Bangkok1.jpg)',
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
            </div>
            <div ref={galleryRef}>
              {galleryInView && (
                <div className="Aiml" style={{ paddingLeft: '1rem' }}>
                  {posts && (
                    <div className="gallery">
                      <div className="areahead">
                        <p>Achievements</p>
                      </div>

                      {isLoading ? (
                        <div className="loading">
                          <span>NITRR-Achievements LOADING...</span>
                        </div>
                      ) : (
                        <>
                          <div className="galleryWrap12">
                          {posts.map((post) => (
                                 post.tags===props.tag ?(
                                <LazyLoad item key={post._id} height={200} offset={100} once>
                                  <Post setCurrentId={props.setCurrentId} post={post} />
                                </LazyLoad>):null
                              ))}

                          </div>

                          {posts.length > 6 && (
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
  ):null;
}


const Achievements=(props)=>{
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();
console.log(props.tag);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (

        <Posts setCurrentId={setCurrentId} tag={props.tag} />
  );

};



export default Achievements;
