import React from 'react';

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="hours-container">
        <h3>HOURS</h3>
        <div className="hours">
          <div className="days">
            <p>Monday:</p>
            <p>Tuesday:</p>
            <p>Wednesday:</p>
            <p>Thursday:</p>
            <p>Friday:</p>
            <p>Saturday & Sunday:</p>
          </div>
          <div className="times">
            <p>8am-5pm</p>
            <p>8am-5pm</p>
            <p>8am-5pm</p>
            <p>8am-5pm</p>
            <p>8am-5pm</p>
            <p>8am-5pm</p>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.396067546669!2d-116.05675938562369!3d34.13620782074967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dac7f8a0c83db9%3A0x16495dd30d1c3b1d!2s29%20Paws%20Pet%20Grooming!5e0!3m2!1sen!2sus!4v1678067229727!5m2!1sen!2sus"
          width="400"
          height="200"
          title="google-map"
          style={{
            border: 0,
            borderRadius: 10,
            outline: 'solid 5px black',
            boxShadow: ' 0 0 5pt 3pt black',
          }}
          loading="lazy"
          tabIndex="0"
        ></iframe>
      </div>
      <div className="contact-container">
        <h3>ADDRESS</h3>
        <div className="address">123 Dog St Twentynine Palms CA, 92277</div>
        <div className="phone">555-555-5555</div>
      </div>
    </div>
  );
};

export default Footer;
