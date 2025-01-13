import React, { useState } from 'react';
import SectionCounter from '../UI/SectionCounter';
import SectionTitle from '../UI/SectionTitle';
import '../Styles/ProjectsSection.css';
import { ProjectCardPreFab } from '../UI/CardsPrefab';
import ProjectCard1 from '../Assets/projectCard1.png';
import ProjectCard2 from '../Assets/projectCard2.png';
import ProjectCard3 from '../Assets/projectCard3.png';
import DesignCard1 from '../Assets/designCard1.png';
import DesignCard2 from '../Assets/designCard2.png';
import DesignCard3 from '../Assets/designCard3.png';

const ProjectsSection = () => {
  const [activeButton, setActiveButton] = useState('development');

  const projectsData = [
    {id: 1, img: ProjectCard1, type: 'development' },
    {id: 2, img: ProjectCard2, type: 'development' },
    {id: 3, img: ProjectCard3, type: 'development' },
    {id: 4, img: DesignCard1, type: 'design' },
    {id: 5, img: DesignCard2, type: 'design' },
    {id: 6, img: DesignCard3, type: 'design' },
  ]

  return (
    <div className='projects-section' id='projects-section'>
      <div className='projects-section__wrapper'>
        <SectionCounter count='3' />

        <div className='projects-section__body'>
          <SectionTitle title='PROJECTS'/>

          <div className='projects-section__controls-wrapper'>
           <ProjectsButtonsController 
            label='Development' 
            customClass={activeButton === 'development' ? 'active-button':''} 
            onClick={() => setActiveButton('development')}
          />
          
           <ProjectsButtonsController 
            label='UI/UX Designs' 
            customClass={activeButton === 'designing' ? 'active-button':''}
            onClick={() => setActiveButton('designing')}
          />
          </div>
          <div className='projects-cards__wrapper'>
            {activeButton === 'development'? <Development data={projectsData} />:<Designs data={projectsData} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection

export const ProjectsButtonsController = ({label, onClick, customClass}) => {
  return (
    <p className={`projects-section__button-controller ${customClass}`} onClick={onClick}>{label}</p>
  )
}


export const Development = ({data}) => {
  const development = data.filter(data => data.type === 'development');
  return (
    <div className='skills-section__skill-cards-wrapper'>   
      {development.map(development => (
        <ProjectCardPreFab key={development.id} data={development} />
      ))}
    </div>
  )
}

export const Designs = ({data}) => {
  const designs = data.filter(data => data.type === 'design');

  return (
    <div className='skills-section__design-cards-wrapper'>
      {designs.map(designs => (
        <ProjectCardPreFab key={designs.id} data={designs} />
      ))}
    </div>
  )
}