import React from 'react';
import '../Styles/IconsLogoPrefab.css'


export function SocMedIconsPreFab({link, icons}) {
  return (
    <a href={link} target='_blank' className='soc-med-icons'><i className={`fa-brands ${icons}`}></i></a>
  )
}

export function PersonalContactInformationIcons({icon, description}){ 
  return (
    <div className='personal-contact-information'>
      <div className='personal-contact-information__icon-wrapper'>
        <i className={`fa-solid ${icon}`}></i>
      </div>
      
      <p>{description}</p>
    </div>
  )
}