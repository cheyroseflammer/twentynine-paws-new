import React from 'react';
import GroomCards from '../../ui/GroomCards/GroomCards';
import catBath from '../../../public/assets/cat-bath.webp';
import fullBath from '../../../public/assets/full-bath.webp';
import fullGroom from '../../../public/assets/full-groom.webp';
import splashDash from '../../../public/assets/splash-dash.webp';
import priceList from '../../../public/assets/price-list.webp';

const Grooming = () => {
  return (
    <div className="grooming" id="grooming">
      <h1 className="grooming-head">Grooming</h1>
      <div className="grooming__container">
        <div className="grooming__wrapper">
          <ul className="grooming__items">
            <GroomCards
              src={fullBath}
              text="Full Services Bath Package"
              label="Full Bath"
              path="/prices"
            />
            <GroomCards
              src={fullGroom}
              text="Full Services Groom Package"
              label="Full Groom"
              path="/prices"
            />
          </ul>

          <ul className="grooming__items">
            <GroomCards
              src={catBath}
              text="Cat Services"
              label="Cat Care"
              path="/prices"
            />
            <GroomCards
              src={priceList}
              text="Price List"
              label="Prices"
              path="/prices"
            />
            <GroomCards
              src={splashDash}
              text="Splash & Dash"
              label="Shake it Off"
              path="/prices"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grooming;
