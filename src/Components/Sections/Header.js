import React, { useState, useEffect, useRef } from 'react';
import ProfilePicture from '../Assets/self.jpg';
import '../Styles/Header.css';

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const hamburgerMenuRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if(hamburgerMenuRef.current && !hamburgerMenuRef.current.contains(e.target)){
        setHamburgerMenu(false);
      }
    }

    window.document.addEventListener('click', handleClick);
    return () => window.document.removeEventListener('click', handleClick);
  }, [])
  return (
    <div className='header'>
      <div className='header__wrapper'>
        <img src={ProfilePicture} className='header__profile-picture' />

        <div className='header__nav-wrapper' ref={hamburgerMenuRef}>
          <i className="fa-solid fa-burger" onClick={() => setHamburgerMenu(true)}></i>
          <ul className={`${hamburgerMenu ? 'active': ''}`}>
            <li>Home</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
