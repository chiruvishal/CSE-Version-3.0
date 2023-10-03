import React from "react";
import Slider from "infinite-react-carousel";
var mountains = "https://i.postimg.cc/xCzKGZqB/Cyan-and-Black-Simple-Circular-General-Hospital-Logo-1.png";


//part2

var shit1 = "https://i.postimg.cc/PrjNv9dj/aaaaaaaa.jpg";
var shit2= "https://i.postimg.cc/cJpdytHS/aaaaaaa.jpg";
var shit3 = "https://i.postimg.cc/Xq33XMd1/aaaaaa.jpg";
var shit4 = "https://i.postimg.cc/hGdqr403/aaaa.jpg";
var groups = "https://i.postimg.cc/K881L85C/w12.jpg";
var dogs = "https://i.postimg.cc/k4Y6XVzn/w5.jpg";
var shit = "https://i.postimg.cc/8ctSVW0H/w14-2.jpg";
var cats = "https://i.postimg.cc/zX6CFQdJ/w3-3.jpg";
var crap = "https://i.postimg.cc/ydpMQBgQ/w11-3.jpg";
var hoi="https://i.postimg.cc/jSjk1BTB/CSE-final.jpg";

import "./MyCarousel.css";

var head1 = "A dream come true!";
var para1 =  "Being one of the premier institutions in India, we pride ourselves on offering a dynamic and innovative learning environment for aspiring computer science engineers.";
var head2 =  "Where Talent meets Opportunity";
var para2 =  "Welcome Welcome to the CSE department of NIT Raipur!";

const thoughts = [
    {
        "head" : head1,
        "para" : para1
    },
    {
        "head": head2,
        "para": para1
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

        <div className = "row" >
        <img src = { shit4 }
        className = "slide_img col-lg-12"
        alt = "Responsive img" /
        >
        </div>
        <div className = "row" >
        <img src = { shit }
        className = "slide_img col-lg-12"
        alt = "Responsive img" /
        >
        </div>

        <div className = "row" >
        <img src = { cats }
        className = "slide_img col-lg-12"
        alt = "Responsive img" />
        </div>
        <div className = "row" >
        <img src = { hoi }
        className = "slide_img col-lg-12"
        alt = "Responsive img" />
        </div>
        <div className = "row" >
        <img src = { dogs }
        className = "slide_img col-lg-12"
        alt = "Responsive img" />
        </div>
        <div className = "row" >
        <img src = { crap }
        className = "slide_img col-lg-12"
        alt = "Responsive img" />
        </div>
        <div className = "row" >
        <img src = { groups }
        className = "slide_img col-lg-12"
        alt = "Responsive img" />
        </div>
        </Slider>
        </div>
        </div>
    );
}

export default MyCarousel;
