import React, { useState } from 'react';
import './ContactInformation.css';
const ContactInformation = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const faqs = [
    {
      question: 'Do you do a Front-end developer?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda sapiente mollitia excepturi quos id magnam obcaecati non est? Maiores?',
    },
    {
      question: 'What is the difference between Front-end and Back-end?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda sapiente mollitia excepturi quos id magnam obcaecati non est? Maiores?',
    },
    {
      question: 'Which is better Front-end or Back-end?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda sapiente mollitia excepturi quos id magnam obcaecati non est? Maiores?',
    },
    {
      question: 'What is Front-end?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda sapiente mollitia excepturi quos id magnam obcaecati non est? Maiores?',
    },
    {
      question: 'What is Back-end?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda sapiente mollitia excepturi quos id magnam obcaecati non est? Maiores?',
    },
  ];
  return (
    <>
      <div className="chase">
        <div className="section-header">
          <div className="contain">
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="contain">
          <div className="row">
            <div className="contact-infos">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-home" />
                </div>
                <div className="contact-info-content">
                  <h4>Address</h4>
                  <p>
                    4671 Sugar Camp Road,
                    <br /> Owatonna, Minnesota, <br />
                    55060
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-phone" />
                </div>
                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <p>571-457-2321</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>ntamerrwael@mfano.ga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="consulting">ContactInformation</h1>
      <body>
        <section>
          <div className="contact-container">
            <div className="form-container">
              <h3>Message Us</h3>
              <form actions="" class=" contact-form">
                <input type="text" placeholder="Your Name" required></input>
                <input
                  type="email"
                  placeholder="Enter Your Email...."
                  required
                ></input>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows=""
                  placeholder="write Message Here"
                  required
                ></textarea>
                <input type="submit" value="send" class="send-button"></input>
              </form>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.54908328496!2d81.60245417486922!3d21.24972218045549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology(NIT)%2C%20Raipur!5e0!3m2!1sen!2sin!4v1685070728832!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
        <div className="container">
          <div className="sub_con">
            {' '}
            <h1 className="title">Frequently Asked Questions</h1>
          </div>

          <div className="accordion">
            <div className="faq-img">
              <img
                src="https://static2.medplusmart.com/live/webpwa/assets/faq-icon.3a8d3259fbfd9baa620e.svg"
                alt=""
                className="accordion-img"
              />
            </div>
            <div className="content-accordion">
              {faqs.map((faq, index) => (
                <div
                  className={`question-answer ${
                    index === expandedIndex ? 'show-text' : ''
                  }`}
                  key={index}
                >
                  <div className="question">
                    <h3 className="title-question">{faq.question}</h3>
                    <button
                      className="question-btn"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="up-icon">
                        <i className="fas fa-chevron-up" />
                      </span>
                      <span className="down-icon">
                        <i className="fas fa-chevron-down" />
                      </span>
                    </button>
                  </div>
                  <div className="answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default ContactInformation;
