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
    <body>
      <div className="containert">
        <span className="big-circlet" />
        <img src="img/shape.png" className="squaret" alt="" />
        <div className="formt">
          <div className="contact-infot">
            <h3 className="titlet">Let's get in touch</h3>
            <p className="textt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>
            <div className="infot">
              <div className="informationt">
                <img
                  src="componentspages/img/location.png"
                  className="icont"
                  alt=""
                />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="informationt">
                <img
                  src="components/pages/img/email.png"
                  className="icont"
                  alt=""
                />
                <p>lorem@ipsum.com</p>
              </div>
              <div className="informationt">
                <img
                  src="components/pages/img/phone.png"
                  className="icont"
                  alt=""
                />
                <p>123-456-789</p>
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
    </body>
  );
};

export default ContactInformation;
