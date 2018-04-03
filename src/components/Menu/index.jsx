import PropTypes from 'prop-types';
import React from 'react';
import logo from './fedex.png';
import chevron from './chevron-left.svg';
import settings from './settings.svg';
import './style.css';


const Menu = (props) => {
  return (
    <div className="menu">
      <img src={chevron} alt="Go back" className={props.skeleton ? 'icon-skeleton' : ''} id="chevron" />
      <img src={logo} alt="Logo" id="logo" className={props.skeleton ? 'logo-skeleton' : ''} />
      <img src={settings} alt="Settings" className={props.skeleton ? 'icon-skeleton' : ''} id="settings" />
    </div>
  );
};

Menu.propTypes = {
  skeleton: PropTypes.bool,
};

Menu.defaultProps = {
  skeleton: true,
};


export default Menu;
