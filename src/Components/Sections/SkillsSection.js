import React, { useState } from 'react';
import '../Styles/SkillsSection.css';
import SectionTitle from '../UI/SectionTitle';
import SectionCounter from '../UI/SectionCounter';
import { SkillsCardsPrefab } from '../UI/CardsPrefab';
import html from '../Assets/html.png';
import css from '../Assets/css.png';
import js from '../Assets/js.png';
import react from '../Assets/react.png';
import tailwind from '../Assets/tailwind.png';
import bootstrap from '../Assets/bootstrap.png';
import jquery from '../Assets/jquery.png';
import laravel from '../Assets/laravel.png';
import php from '../Assets/php.png';
import sql from '../Assets/sql.png';
import figma from '../Assets/figma.png';
import canva from '../Assets/canva.png';
import photopea from '../Assets/photopea.png';
import framer from '../Assets/framer.png';
import adobe from '../Assets/adobe.png';
import github from '../Assets/github.png';
import wordpress from '../Assets/wordpress.png';
import word from '../Assets/word.png';
import excel from '../Assets/excel.png';
import powerpoint from '../Assets/powerpoint.png';

const SkillsSection = () => {
  const [selectedSkills, setSelectedSkills] = useState('front end');

  return (
    <div className='skills-section' id='skills-section'>
      <div className='skills-section__wrapper'>
        <SectionCounter count='2' />

        <div className='skills-section__body'>
          <SectionTitle title='SKILLS'/>

          <div className='skills-section__controls-wrapper'>
            <SkillsButtonController customClass={selectedSkills ==='front end' ? 'active': ''} label='Front End' onClick={() => setSelectedSkills('front end')} />
            <SkillsButtonController customClass={selectedSkills ==='back end' ? 'active': ''} label='Back End' onClick={() => setSelectedSkills('back end')} />
            <SkillsButtonController customClass={selectedSkills ==='designing' ? 'active': ''} label='Designing' onClick={() => setSelectedSkills('designing')} />
            <SkillsButtonController customClass={selectedSkills ==='others' ? 'active': ''} label='Others' onClick={() => setSelectedSkills('others')} />
          </div>
          <div className='skills-section__cards-wrapper'>
            {selectedSkills ==='front end' ? <FrontEndSkills />:<></>}
            {selectedSkills ==='back end' ? <BackEndSkills />:<></>}
            {selectedSkills ==='designing' ? <DesigningSkills />:<></>}
            {selectedSkills ==='others' ? <OtherSkills />:<></>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection


export const SkillsButtonController = ({label, onClick, customClass}) => {
  return (
    <button className={`skills-section__button-controller ${customClass}`} onClick={onClick}>{label}</button>
  )
}


export const FrontEndSkills = ({}) => {
  return (
    <div className='skills-section__skill-cards-wrapper'>
      <SkillsCardsPrefab logo={html} name='HTML5' description='Advanced' />
      <SkillsCardsPrefab logo={css} name='CSS' description='Advanced' />
      <SkillsCardsPrefab logo={react} name='React' description='Intermediate' />
      <SkillsCardsPrefab logo={js} name='JavaScript' description='Intermediate' />
      <SkillsCardsPrefab logo={tailwind} name='Tailwind' description='Intermediate' />
      <SkillsCardsPrefab logo={bootstrap} name='Bootstrap' description='Beginner' />
      <SkillsCardsPrefab logo={jquery} name='JQuery' description='Beginner' />
    </div>
  )
}

export const BackEndSkills = ({}) => {
  return (
    <div className='skills-section__skill-cards-wrapper'>
      <SkillsCardsPrefab logo={php} name='PHP' description='Intermediate' />
      <SkillsCardsPrefab logo={laravel} name='Laravel' description='Beginner' />
      <SkillsCardsPrefab logo={sql} name='MySQL' description='Intermediate' />
    </div>
  )
}

export const DesigningSkills = ({}) => {
  return (
    <div className='skills-section__skill-cards-wrapper'>
      <SkillsCardsPrefab logo={figma} name='Figma' description='Intermediate' />
      <SkillsCardsPrefab logo={framer} name='Framer' description='Beginner' />
      <SkillsCardsPrefab logo={canva} name='Canva' description='Intermediate' />
      <SkillsCardsPrefab logo={photopea} name='Photopea' description='Intermediate' />
      <SkillsCardsPrefab logo={adobe} name='Adobe' description='Beginner' />
    </div>
  )
}

export const OtherSkills = ({}) => {
  return (
    <div className='skills-section__skill-cards-wrapper'>
      <SkillsCardsPrefab logo={github} name='GitHub' description='Beginner' />
      <SkillsCardsPrefab logo={wordpress} name='WordPress' description='Intermediate' />
      <SkillsCardsPrefab logo={word} name='Microsoft Word' description='Advanced' />
      <SkillsCardsPrefab logo={excel} name='Excel' description='Advanced' />
      <SkillsCardsPrefab logo={powerpoint} name='Powerpoint' description='Advanced' />
    </div>
  )
}