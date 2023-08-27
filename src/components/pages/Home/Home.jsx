import React, { useEffect,useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import NewsAndAnnouncement from '../NewsAndAnnouncement/NewsAndAnnouncement';
import Events from '../Events/Events';
import './Home.css';
import MyCarousel from './MyCarousel';
import Welcome from './Welcome';
import TopAchievementsHome from './TopAchievementsHome';
import AllCarousel from './AllCarousel';
import About from '../About/About'

const Counter = ({ target }) => {
  const counterRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when counter enters viewport
    threshold: 1,
  });
  useEffect(() => {
    if (!inView) return;

    const counterElement = counterRef.current;
    const count = +counterElement.innerText;
    const increment = target / 200;
    let currentCount = 0;

    const animateCounters = () => {
      if (currentCount < target) {
        currentCount += increment;
        counterElement.innerText = Math.ceil(currentCount);
        requestAnimationFrame(animateCounters);
      } else {
        counterElement.innerText = target;
      }
    };

    animateCounters();
  }, [inView, target]);

  return (
    <div ref={ref}>
      <div className="counter" ref={counterRef} data-target={target}>
        0
      </div>
    </div>
  );
};




export default function Home() {



  return (
    <div>
      <MyCarousel />
      <Welcome />
      <About/>
      <TopAchievementsHome heading="Achievements" tag="3"/>

      <div>


      <div className="counter-uppp">
        <div className="content">

          <div className="box">
            <div className="icon">
              <i className="fas fa-gift"></i>
      </div>
      <Counter target={508} />
                <div className="text">Offers Received</div>
              </div>

    <div className="box">
      <div className="icon">
        <i className="fas fa-users"></i>
      </div>
      <Counter target={436} />
                <div className="text">Students Placed</div>
              </div>
    <div className="box">
      <div className="icon">
        <i className="fas fa-award"></i>
      </div>
      <Counter target={2} />
                <div className="text">Cr Highest Package</div>
              </div>
  </div>
</div>
</div>

      <div className="mu">
      <NewsAndAnnouncement  heading="News" tag="1"/>
        <Events heading="Events" tag="2"/>
      </div>
    </div>
  );
}
