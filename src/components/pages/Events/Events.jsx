import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import './Events.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class Events extends React.Component {
  render() {
    return (
      <div className="cardp">
        <div className="anu">
          <h3>Events</h3>
        </div>
        <div>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== 'mobile' ? true : false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            containerClass="carousel-container"
            className="caro"
          >
            <div className="page-container">
              <BlogCard />
            </div>
            <div className="page-container">
              <BlogCard />
            </div>
            <div className="page-container">
              <BlogCard />
            </div>
            <div className="page-container">
              <BlogCard />
            </div>
            <div className="page-container">
              <BlogCard />
            </div>
            <div className="page-container">
              <BlogCard />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

// class Events extends React.Component {
//   render() {
//     return (
// <div className="page-container">
//   <BlogCard />
//       </div>
//     )
//   }
// }

class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  };
  render() {
    return (
      <div
        onClick={this.flip}
        onMouseLeave={this.flip}
        className={'card-container' + (this.state.flipped ? ' flipped' : '')}
      >
        {/* <Front /> */}
        <div className="front">
          <div className="image-container">
            <img
              className="card-image"
              src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"
            ></img>
          </div>
          <div className="main-area">
            <div className="blog-post">
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p className="blog-content">
                Some sample text to demonstrate how these cards will work,
                including how they truncate long sentences.
              </p>
            </div>
          </div>
        </div>
        <div className="back">
          <p>
            Some sample text to demonstrate how these cards will work, including
            how they truncate long sentences. This section displays the
            full-length blog post.
          </p>
        </div>
      </div>
    );
  }
}

export default Events;
