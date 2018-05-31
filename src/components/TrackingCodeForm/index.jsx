import React from 'react';
import './style.css';
import Menu from '../Menu';
import packageIcon from './package-icon-anim.svg';
import nextButton from './next-button.svg';

const TrackingCodeForm = () => (
  <div className="tracking-code-form">
    <Menu skeleton={false} />
    <img id="packageIcon" src={packageIcon} alt="" />
    <div className="milkyGlassBox">
      <h2>Please fill in your tracking code to continue.</h2>
      <input type="text" />
      <p>Tracking code</p>
      <img src={nextButton} alt="next" />
    </div>
  </div>
);

export default TrackingCodeForm;
