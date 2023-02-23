import React, { useState } from 'react';
import { GroomingMenuItems } from '../../data/MenuItems/MenuItems';
import Link from 'next/link';

const DropdownGrooming = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      {' '}
      <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {GroomingMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} href={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropdownGrooming;
