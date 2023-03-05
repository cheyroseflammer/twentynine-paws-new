import React from 'react';
import Button from '../../ui/Button/Button';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  return (
    <div className='hero-container'>
      <video id='video' autoPlay loop muted src='/assets/video.mp4' />
      <h1 className='hero'>29 PAWS PET GROOMING</h1>
      <h4>We provide quality grooming by educated and skilled professionals.</h4>
      <p>
        Our Mission as a family owned buisness is to provide a healthy and positive grooming
        experience for your pet in a professional and stress-free environment. All pets are treated
        with love and kindness, as well as from a professional and humane approach. It is our goal
        to assure owners that their pets will be treated with the same love and respect as we treat
        our own beloved pets.
      </p>
      <div className='hero-btns'>
        <Button className='btns' buttonstyle='btn--outline' buttonsize='btn--large'>
          FORMS
        </Button>
        <button className='btns' buttonstyle='btn--primary' buttonsize='btn--large'>
          <a className='phone' href='tel:5555555555'>
            CALL US
          </a>
          <FontAwesomeIcon icon={faPhone} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
