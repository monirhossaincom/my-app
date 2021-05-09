import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import aboutImg from '../img/about.png';
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <header className='header-area header-transparent'>
      <div className='logo-nav'>
        <div className='logo'>
          <Link to='/'>Monir Hossain</Link>
        </div>
        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <div
            className='md-link logo text-center mb-30'
            onClick={closeMobileMenu}
          >
            <img src={aboutImg} alt='Monir Hossain' className='img-fluid' />
          </div>

          <li className='option' onClick={closeMobileMenu}>
            <Link to='/'>Home</Link>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <Link to='/about'>About</Link>
          </li>
          <li className='option' onClick={closeMobileMenu}>
            <Link to='/projects'>Projects</Link>
          </li>

          <li className='option mobile-option' onClick={closeMobileMenu}>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='option mobile-option' onClick={closeMobileMenu}>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='mobile-menu' onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faWindowClose} size='2x' />
          ) : (
            <FontAwesomeIcon icon={faBars} size='2x' />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
