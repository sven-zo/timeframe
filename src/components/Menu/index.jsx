import logo from './fedex.png';
import chevron from './chevron-left.svg';
import settings from './settings.svg';
import React from 'react';
import './style.css';

const Menu = () => (
  <div className="menu">
    <img src={chevron} alt="Go back" id="chevron" />
    <img src={logo} alt="Logo" id="logo" />
    <img src={settings} alt="Settings" id="settings" />
  </div>
);

export default Menu;
