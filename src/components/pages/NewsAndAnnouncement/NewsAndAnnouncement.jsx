import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts } from "./../../../actions/home";

import "./NewsAndAnnouncement.css";
const myComponent = {
  width: "100%",
  height: "450px",
  overflowX: "hidden",
  overflowY: "scroll",
};

const Post = ({ setCurrentId, post }) => {
  const dispatch = useDispatch();

  return (
    // <div className="inside-news-box">
    <div className="for-border">
      <div className="newsdes">{post.creator}</div>
      <div className="alink">
        <a href={post.title}>{post.message}</a>
      </div>
    </div>
    // </div>
  );
};

const Posts = ({ setCurrentId, tag }) => {
  const posts = useSelector((state) => state.posts);

  const newsArray = [
    { date: "30 may 2023", link: "/", descript: "Lorem ipsum dolor sit" },
    { date: "30 may 2023", link: "/", descript: "Lorem ipsum dolor sit" },
    { date: "30 may 2023", link: "/", descript: "Lorem ipsum dolor sit" },
    { date: "30 may 2023", link: "/", descript: "Lorem ipsum dolor sit" },
    { date: "30 may 2023", link: "/", descript: "Lorem ipsum dolor sit" },
    { date: "30 may 2023", link: "/", descript: "Lorem ipsum dolor sit" },
    { date: "30 may 2023", link: "/", descript: "Lorem ipsum dolor sit" },
    { date: "30 may 2023", link: "/", descript: "Lorem ipsum dolor sit" },
    { date: "30 may 2023", link: "/", descript: "Lorem ipsum dolor sit" },
    { date: "30 may 2023", link: "/", descript: "Lorem ipsum dolor sit" },
  ];
  return posts.length ? (
    <div className="first">
      <div className="headingnews">
        <h3 className="hen">News And Announcement</h3>
        <div className="news" style={myComponent}>
          <div className="main-news-box">
            {posts.map((post) =>
              post.tags === tag ? (
                <div item key={post._id} className="inside-news-box">
                  <Post setCurrentId={setCurrentId} post={post} />
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
const NewsAndAnnouncement = (props) => {
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return <Posts setCurrentId={setCurrentId} tag={props.tag} />;
};

export default NewsAndAnnouncement;
