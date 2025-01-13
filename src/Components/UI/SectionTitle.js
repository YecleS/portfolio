import React from 'react';
import '../Styles/SectionTitle.css'

export default function SectionTitle({title, customClass}) {
  return (
    <h3 className={`section-title ${customClass}`}>{title}</h3>
  )
}
