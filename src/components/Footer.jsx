import React from 'react';
export default function Footer() {
  return (
    <>
      <div class="footer">
        <footer className="footer footer1">
          <div className="footer-left col-md-4 col-sm-6">
            <a href="" title="">
              <img
                className="logo1"
                src="https://i.postimg.cc/2js2MXj5/Logowhite.png"
              />
            </a>
            <h3 className="quick">Quick Links</h3>
            <p className="menu">
              <a href="#">Home</a> |<a href="#">About</a> |
              <a href="#">Services</a> |<a href="#">Portfolio</a> |
              <a href="#">News</a> |<a href="#">Contact</a>
            </p>

            <div className="icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-center col-md-4 col-sm-6">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>National Institute of Technology Raipur</span> G.E. Road,
                Raipur Chhatisgarh - 492010
              </p>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <p>(+91)-771-2254200</p>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="#">
                  Email- director@nitrr.ac.in<br></br>
                  registrar@nitrr.ac.in
                </a>
              </p>
            </div>
          </div>
          <div className="footer-center col-md-4 col-sm-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.548957101439!2d81.60245417485478!3d21.249727180153215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology(NIT)%2C%20Raipur!5e0!3m2!1sen!2sin!4v1685458396214!5m2!1sen!2sin"
              width="400"
              height="350"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="footer-right col-md-4 col-sm-6"></div>
          <p className="name">ACE WEB TEAM &copy; 2023</p>
        </footer>
      </div>
    </>
  );
}
