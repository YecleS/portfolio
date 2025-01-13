import React, { useState, useEffect, useRef } from 'react';
import ProfilePicture from '../Assets/self.jpg';
import '../Styles/Header.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const hamburgerMenuRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e) => {
      if(hamburgerMenuRef.current && !hamburgerMenuRef.current.contains(e.target)){
        setHamburgerMenu(false);
      }
    }

    window.document.addEventListener('click', handleClick);
    return () => window.document.removeEventListener('click', handleClick);
  }, []);

  const handleScroll = (id) => {
    if(location.pathname !== '/'){
      navigate('/');
    }else {
      const section = document.getElementById(id)

      if(section){
        section.scrollIntoView({behavior:'smooth'});
      }
    }
  }

  return (
    <div className='header'>
      <div className='header__wrapper'>
        <img src={ProfilePicture} className='header__profile-picture' />

        <div className='header__nav-wrapper' ref={hamburgerMenuRef}>
          <i className="fa-solid fa-burger" onClick={() => setHamburgerMenu(true)}></i>
          <ul className={`${hamburgerMenu ? 'active': ''}`}>
            <li onClick={() => handleScroll('hero-section')}>Home</li>
            <li onClick={() => handleScroll('education-section')}>Education</li>
            <li onClick={() => handleScroll('skills-section')}>Skills</li>
            <li onClick={() => handleScroll('projects-section')}>Projects</li>
            <li onClick={() => handleScroll('contacts-section')}>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
