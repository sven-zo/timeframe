import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Time = (props) => {
  if (props.skeleton) {
    return (
      <div className="time">
        <div className="loader">Loading...</div>
      </div>
    )
  }
  return (
    <div className="time">
      <h2>Bezorgmoment</h2>
      <h1>Donderdag 5 maart</h1>
      <h1>10:00 - 10:30</h1>
    </div>
  );
};

Time.propTypes = {
  skeleton: PropTypes.bool,
};

Time.defaultProps = {
  skeleton: true,
};

export default Time;
