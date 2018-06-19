import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import refreshIcon from './refresh.svg';

const RefreshButton = () => (
  <div className="refresh-button">
    <Link to="/input" href="/input">
      <p>Click here to try again.</p>
      <img src={refreshIcon} alt="refresh" />
    </Link>
  </div>
);

export default RefreshButton;
