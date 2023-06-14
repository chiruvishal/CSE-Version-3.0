import React, { useState } from 'react';

const BlogCard = (props) => {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      onClick={flip}
      onMouseLeave={flip}
      className={'card-container' + (flipped ? ' flipped' : '')}
    >
      {/* <Front /> */}
      <div className="front">
        <div className="image-container">
          <img className="card-image" src={props.image} alt="Blog Card Image" />
        </div>
        <div className="main-area">
          <div className="blog-post">
            <p className="date">{props.date}</p>
            <p className="blog-content">{props.para}</p>
          </div>
        </div>
      </div>
      <div className="back">
        <p>{props.back}</p>
      </div>
    </div>
  );
};

export default BlogCard;
