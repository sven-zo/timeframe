import PropTypes from 'prop-types';
import React from 'react';
import logo from './fedex.png';
import chevron from './chevron-left.svg';
import settings from './settings.svg';
import './style.css';


const Menu = props => (
  <div className="menu">
    <img src={chevron} alt="Go back" className={props.skeleton} id="chevron" />
    <img src={logo} alt="Logo" id="logo" />
    <img src={settings} alt="Settings" className={props.skeleton} id="settings" />
  </div>
);

Menu.propTypes = {
  skeleton: PropTypes.oneOf(['', 'skeleton']),
};

Menu.defaultProps = {
  skeleton: 'skeleton',
};


export default Menu;
