import React from "react";
import Slider from "infinite-react-carousel";

var cloud_mountains = "https://i.postimg.cc/tTMgBRng/Untitled-design-3.png";
var mountains =
    "https://i.postimg.cc/xCzKGZqB/Cyan-and-Black-Simple-Circular-General-Hospital-Logo-1.png";
var groups =
    "https://i.postimg.cc/vmDGYYf6/Whats-App-Image-2023-05-31-at-01-31-31.jpg";
var hills =
    "https://i.postimg.cc/g0wP9MbV/Whats-App-Image-2023-05-26-at-23-44-04.jpg";
import "./MyCarousel.css";

var head1 = "Discover a Whole New World";
var para1 =  "Welcome to the CSE department of NIT Raipur!As one of the premier institutions in India, we pride ourselves on offering a dynamic and innovative learning environment for aspiring computer science engineers.";
var head2 =  "Discover";
var para2 =  "Welcome Welcome to the CSE department of NIT Raipur!As one of the premier institutions in India, we pride ourselves on";

const thoughts = [
    {
        "head" : head1,
        "para" : para1
    },
    {
        "head": head2,
        "para": para2
    }
]
function MyCarousel() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        className: "slide_box",
        dots: false,
        virtualList: true,
        arrows: true,
        pauseOnHover: true,
    };
    return ( 
        <div className = "carsel" >
        <div className = "part1" >
            <Slider {...settings }>
        {thoughts.map((thought)=>
        <div>
        <img src = { mountains }
        className = "slide_img col-lg-12"
        alt = "Responsive img" />
        <div className = "img_overlay" >
        <div class = "gfg" >
        <div class = "gfgcard" >
        <div class = "contentyz" >
        <h1> {thought.head}</h1>
        <p>
            {thought.para}
        </p>
        </div> 
        </div> 
        </div>
        </div>
        </div>
        )}
        </Slider>
        </div>
        <div className = "part2">
        <Slider {...settings }>
        <div className = "row">
        <img src = { cloud_mountains }
        className = "slide_img col-lg-12"
        alt = "Responsive img" />
        </div>
        <div className = "row" >
        <img src = { groups }
        className = "slide_img col-lg-12"
        alt = "Responsive img" /
        >
        </div>
        <div className = "row" >
        <img src = { hills }
        className = "slide_img col-lg-12"
        alt = "Responsive img" />
        </div>
        </Slider>
        </div>
        </div>
    );
}

export default MyCarousel;