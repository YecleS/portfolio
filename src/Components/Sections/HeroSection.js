import React from 'react';
import HeroImg from '../Assets/hero-img.png';
import '../Styles/HeroSection.css';
import PrimaryButtonPrefab from '../UI/ButtonsPrefab';
import { SocMedIconsPreFab } from '../UI/IconsLogoPrefab';

const HeroSection = () => {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1FJlti7kAB0RrOiC8en1PpeeJz-sLAvN3';
    link.download = 'Steven Yecla_CV.pdf';
    link.click();
  }

  return (
    <div className='hero-section' id='hero-section'>
        <div className='hero-section__wrapper'>
            <div className='hero-section__profile-picture-wrapper'>
                <img src={HeroImg}/>
            </div>

            <div className='hero-section__hero-text-wrapper'>
                <h4>Hello I'm 👋</h4>
                <h3>Steven D Yecla</h3>
                <h3>Aspiring <span>Front End Developer</span></h3>
                <h3>And <span>UI/UX Designer</span></h3> 
            </div>
            <PrimaryButtonPrefab customClass='hero-section__button' label='Download CV' onClick={downloadCV} />
            
              <div className='hero-section__soc-med-icons-wrapper'>
                <SocMedIconsPreFab link='https://www.facebook.com/steven.yecla/' icons='fa-square-facebook' />
                <SocMedIconsPreFab link='https://www.instagram.com/steven_yecla/?hl=am-et' icons='fa-square-instagram' />
                <SocMedIconsPreFab link='https://www.tiktok.com/@_.index' icons='fa-tiktok' />
              </div>
        </div>
    </div>
  )
}

export default HeroSection
