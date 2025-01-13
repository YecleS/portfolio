import React, { useRef } from 'react';
import '../Styles/CardsPrefab.css';
import ProjectView from '../Pages/ProjectView';
import { useNavigate } from 'react-router-dom';

export function EducationCardsPrefab({customClass, title, year}) {
  return (
    <div className={`education-cards ${customClass}`}>
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  )
}

export function SkillsCardsPrefab({logo, name, description}) {
  return (
    <div className='skills-card'>
      <img src={logo}/>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  )
}

export function ProjectCardPreFab({data}) {
  const navigate = useNavigate();
  const projectViewRef = useRef();

  const projectViewToggle = () => {
    if(projectViewRef.current && projectViewRef.current.open){
      projectViewRef.current.close();
    }else {
      projectViewRef.current.showModal();
    }
  }

  return (
    <div className='project-card'>
      <div className='project-card__img-wrapper'>
        <img src={data.img} className='project-card__img' />
      </div>
      
      <div className='project-card__view-project-wrapper'>
        <p onClick={() => navigate(`/project-view/${data.id}`)}>View Project</p> 
        <i className=" fa-solid fa-angle-right"></i>
      </div>
    </div>
  )
}


