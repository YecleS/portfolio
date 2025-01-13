import React from 'react';
import '../Styles/EducationSection.css';
import { EducationCardsPrefab } from '../UI/CardsPrefab';
import { TimelineDot } from '../UI/TimelineDot';
import SectionCounter from '../UI/SectionCounter';
import SectionTitle from '../UI/SectionTitle';

const EducationSection = () => {
  return (
    <div className='education-section' id='education-section'>
        <div className='education-section__wrapper'>
            <SectionCounter count='1' />
            
            <div className='education-section__body'>
                <SectionTitle title='EDUCATION' />

                <div className='education-section__timeline'>
                    <div className='education-section__left-wrapper'>
                        <div className='education-section__education-card-wrapper education-card1'>
                            <EducationCardsPrefab title='Pulo Elementary High School' year='2009 - 2015'/>
                            <TimelineDot customClass='education-dot1' />
                        </div>
                        <div className='education-section__education-card-wrapper education-card3'>
                            <EducationCardsPrefab title='AMA Computer College Calamba' year='2019 - 2021'/>
                            <TimelineDot customClass='education-dot3' />
                        </div>
                    </div>
                    <div className='education-section__right-wrapper'>
                        <div className='education-section__education-card-wrapper education-card2'>
                            <EducationCardsPrefab title='Pulo National High School' year='2015 - 2019'/>
                            <TimelineDot customClass='education-dot2' />
                        </div>
                        <div className='education-section__education-card-wrapper education-card4'>
                            <EducationCardsPrefab title='University of Cabuyao' year='2021 - 2025'/>
                            <TimelineDot customClass='education-dot4' />
                        </div>
                        
                        
                    </div>
                                
                </div>
            </div>
        </div>
    </div>
  )
}

export default EducationSection
