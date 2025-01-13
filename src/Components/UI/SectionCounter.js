import React from 'react';
import '../Styles/SectionCounter.css'

export default function SectionCounter({count}) {
  return (
    <h1 className='section-counter'>{count}</h1>
  )
}
