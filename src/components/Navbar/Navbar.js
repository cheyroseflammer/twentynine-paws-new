import React, { useState } from 'react';
import Link from 'next/link';
import DropdownGrooming from '../../ui/Dropdown/DropdownGrooming';
import DropdownAbout from '../../ui/Dropdown/DropdownAbout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBars, faX, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownTwo, setDropdownTwo] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnterTwo = () => {
    if (window.innerWidth < 960) {
      setDropdownTwo(false);
    } else {
      setDropdownTwo(true);
    }
  };
  const onMouseLeaveTwo = () => {
    if (window.innerWidth < 960) {
      setDropdownTwo(false);
    } else {
      setDropdownTwo(false);
    }
  };
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
          29 PAWS <FontAwesomeIcon icon={faPaw} />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link href='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link href='/grooming' className='nav-links' onClick={closeMobileMenu}>
              Grooming <FontAwesomeIcon icon={faCaretDown} />
            </Link>
            {dropdown && <DropdownGrooming />}
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnterTwo} onMouseLeave={onMouseLeaveTwo}>
            <Link href='/about' className='nav-links' onClick={closeMobileMenu}>
              About <FontAwesomeIcon icon={faCaretDown} />
            </Link>
            {dropdownTwo && <DropdownAbout />}
          </li>
          <li className='nav-item'>
            <Link href='/contact-us' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
