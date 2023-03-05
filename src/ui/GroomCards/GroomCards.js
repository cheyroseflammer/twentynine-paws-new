import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GroomCards = (props) => {
  return (
    <>
      <li className='grooming__item'>
        <Link className='grooming__item__link' href={props.path}>
          <figure className='grooming__item__pic-wrap' data-category={props.label}>
            <Image
              src={props.src}
              alt='Full Bath'
              className='grooming__item__img'
              width={1000}
              height={1000}
            />
          </figure>
          <div className='grooming__item__info'>
            <h5 className='grooming__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default GroomCards;
