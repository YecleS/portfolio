import React from 'react';
import '../Styles/ButtonsPrefab.css'

export default function PrimaryButtonPrefab({customClass, onClick, label, disabled}) {
  return (
    <button className={`primary-button ${customClass}`} onClick={onClick} disabled={disabled}>{label}</button>
  )
}
