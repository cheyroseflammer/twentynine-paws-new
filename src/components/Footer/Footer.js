import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='hours-container'>
        <h3>HOURS</h3>
        <div className='hours'>
          <div className='days'>
            <p>Monday:</p>
            <p>Tuesday:</p>
            <p>Wednesday:</p>
            <p>Thursday:</p>
            <p>Friday:</p>
            <p>Saturday & Sunday:</p>
          </div>
          <div className='times'>
            <p>8am-5pm</p>
            <p>8am-5pm</p>
            <p>8am-5pm</p>
            <p>8am-5pm</p>
            <p>8am-5pm</p>
            <p>8am-5pm</p>
          </div>
        </div>
      </div>
      <div className='map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31418.394570370874!2d-116.05058658642449!3d34.13477847130304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgrooming%20near%20me!5e0!3m2!1sen!2sus!4v1615667543618!5m2!1sen!2sus'
          width='400'
          height='200'
          title='google-map'
          style={{
            border: 0,
            borderRadius: 10,
            outline: 'solid 5px black',
            boxShadow: ' 0 0 5pt 3pt black',
          }}
          allowfullscreen=''
          loading='lazy'
          tabIndex='0'
        ></iframe>
      </div>
      <div className='contact-container'>
        <h3>ADDRESS</h3>
        <div className='address'>123 Dog St Twentynine Palms CA, 92277</div>
        <div className='phone'>555-555-5555</div>
      </div>
    </div>
  );
};

export default Footer;
