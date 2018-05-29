import React from 'react';
import PropTypes from 'prop-types';
import packageIcon from './package-icon-anim.svg';
import './style.css';

const Arrive = ({ signature }) => (
  <div className="arrive">
    <div className="arrive__left">
      <img src={packageIcon} alt="" />
    </div>
    <div className="arrive__right">
      <h2>Your package will arrive shortly.</h2>
      {signature ? <p>(Signature required.)</p> : ''}
    </div>
  </div>
);
Arrive.propTypes = {
  signature: PropTypes.bool,
};
Arrive.defaultProps = {
  signature: false,
};

export default Arrive;
