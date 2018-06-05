import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './fedex.png';
import chevron from './chevron-left.svg';
import help from './help-circle.svg';
import './style.css';

const Menu = props => (
  <div className="menu">
    {props.showBackButton ? (
      <Link id="icons" to={props.backUrl} href={props.backUrl}><img
        src={chevron}
        alt="Go back"
        className={props.skeleton ? 'icon-skeleton' : ''}
        id="chevron"
      />
      </Link>
    ) : (
      <div className="empty" />
    )}
    <img src={logo} alt="Logo" id="logo" className={props.skeleton ? 'logo-skeleton' : ''} />
    {props.showHelpButton ? (
      <Link id="icons" to="/help" href="/help">
        <img src={help} alt="Help" className={props.skeleton ? 'icon-skeleton' : ''} id="help" />
      </Link>
    ) : (
      <div className="empty" />
    )}
  </div>
);

Menu.propTypes = {
  backUrl: PropTypes.string,
  skeleton: PropTypes.bool,
  showBackButton: PropTypes.bool,
  showHelpButton: PropTypes.bool,
};

Menu.defaultProps = {
  backUrl: '/input',
  skeleton: true,
  showBackButton: false,
  showHelpButton: false,
};

export default Menu;
