import React from 'react';
import '../Styles/TimelineDot.css'

export function TimelineDot({customClass}) {
  return (
    <div className={`timeline-dot ${customClass}`}></div>
  )
}
