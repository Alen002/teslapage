import React from 'react';
import './Header.css';
import TeslaLogo from '../assets/teslaLogoSmall.svg'

const Header = () => {
  return (
    <div className='header'>
  
      <div className='header-logo'>
        <img src={TeslaLogo} alt='Logo'/>
      </div>

      <div className='header-center'>
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panel</p>
      </div>

      <div className='header-right'>
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>

    </div>
  )
}

export default Header;
