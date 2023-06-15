import React, { useState } from 'react';

const BlogCard = ({post}) => {
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
          <img className="card-image" src={post.image} alt="Blog Card Image" />
        </div>
        <div className="main-area">
          <div className="blog-post">
            <p className="date">{post.date}</p>
            <p className="blog-content">{post.title}</p>
          </div>
        </div>
      </div>
      <div className="back">
        <p>{post.message}</p>
      </div>
    </div>
  );
};

export default BlogCard;
