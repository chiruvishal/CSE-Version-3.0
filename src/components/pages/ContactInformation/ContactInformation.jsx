import React from 'react';
import './ContactInformation.css';

const ContactInformation = () => {
  const focusFunc = (event) => {
    let parent = event.target.parentNode;
    parent.classList.add('focus');
  };

  const blurFunc = (event) => {
    let parent = event.target.parentNode;
    if (event.target.value === '') {
      parent.classList.remove('focus');
    }
  };

  return (
    <>
      <div>
        <div
          className="nitr-page-title-wrap nitr-style-custom nitr-left-align"
          style={{
            backgroundImage: 'url(https://i.postimg.cc/4N7MFDm5/IMG-2658.jpg)',
          }}
        >
          <div className="nitr-header-transparent-substitute "></div>
          <div className="nitr-page-title-bottom-gradient"></div>
          <div className="nitr-page-title-container green destinations-section-wrapper nitr-container ">
            <div
              className="nitr-page-title-content nitr-item-pdlr"
              style={{ paddingBottom: '60px' }}
            >
              <div className="green-line-text">Contact Us</div>
            </div>
          </div>
        </div>
        <div className="containert">
          <span className="big-circlet" />
          <img
            src="https://i.postimg.cc/YqNjggfW/SHAPE11.png"
            className="squaret"
            alt=""
          />
          <div className="formt">
            <div className="contact-infot">
              <h3 className="titlet">Let's get in touch</h3>
              <p className="textt">
                We would love to hear from you! If you have any questions,
                suggestions, or feedback, please don't hesitate to get in touch
                with us . Our team is here to assist you and provide the
                information you need. We value your input and look forward to
                connecting with you!
              </p>
              <div className="infot">
                <div className="informationt">
                  <img
                    src="https://i.postimg.cc/kg9qdpSV/LOCATION11.png"
                    className="icont"
                    alt=""
                  />
                  <p>
                    National Institute of Technology Raipur G.E. Road, Raipur
                    Chhatisgarh - 492010
                  </p>
                </div>
                <div className="informationt">
                  <img
                    src="https://i.postimg.cc/C1x3KyM1/EMAIL11.png"
                    className="icont"
                    alt=""
                  />
                  <p>director@nitrr.ac.in registrar@nitrr.ac.in</p>
                </div>
                <div className="informationt">
                  <img
                    src="https://i.postimg.cc/hv6WwCBG/PHONE11.png"
                    className="icont"
                    alt=""
                  />
                  <p>(+91)-771-2254200</p>
                </div>
              </div>
              <div className="social-mediat">
                <p>Connect with us :</p>
                <div className="social-iconst">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-formt">
              <span className="circle one" />
              <span className="circle two" />
              <form action="index.html" autoComplete="off">
                <h3 className="titlet">Contact us</h3>
                <div className="input-containert">
                  <input
                    type="text"
                    name="name"
                    className="inputt"
                    onFocus={focusFunc}
                    onBlur={blurFunc}
                  />
                  <label htmlFor="">Username</label>
                  <span>Username</span>
                </div>
                <div className="input-containert">
                  <input
                    type="email"
                    name="email"
                    className="inputt"
                    onFocus={focusFunc}
                    onBlur={blurFunc}
                  />
                  <label htmlFor="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-containert">
                  <input
                    type="tel"
                    name="phone"
                    className="inputt"
                    onFocus={focusFunc}
                    onBlur={blurFunc}
                  />
                  <label htmlFor="">Phone</label>
                  <span>Phone</span>
                </div>
                <div className="input-containert textareat">
                  <textarea
                    name="message"
                    className="inputt"
                    defaultValue={''}
                    onFocus={focusFunc}
                    onBlur={blurFunc}
                  />
                  <label htmlFor="">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" defaultValue="Send" className="btnt" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
