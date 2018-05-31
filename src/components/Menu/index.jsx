import PropTypes from 'prop-types';
import React from 'react';
import logo from './fedex.png';
import chevron from './chevron-left.svg';
import help from './help-circle.svg';
import './style.css';

const Menu = props => (
  <div className="menu">
    {props.showBackButton ? (
      <img
        src={chevron}
        alt="Go back"
        className={props.skeleton ? 'icon-skeleton' : ''}
        id="chevron"
      />
    ) : (
      <div className="empty" />
    )}
    <img src={logo} alt="Logo" id="logo" className={props.skeleton ? 'logo-skeleton' : ''} />
    <img src={help} alt="Help" className={props.skeleton ? 'icon-skeleton' : ''} id="help" />
  </div>
);

Menu.propTypes = {
  skeleton: PropTypes.bool,
  showBackButton: PropTypes.bool,
};

Menu.defaultProps = {
  skeleton: true,
  showBackButton: false,
};

export default Menu;
