import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Card = ({ status, timeframe, date, old }) => (
  <div className={`card ${old ? 'card-old' : ''}`}>
    <h1>{status}</h1>
    <h2>{timeframe}</h2>
    <p>{date}</p>
  </div>
);
Card.propTypes = {
  old: PropTypes.bool,
  status: PropTypes.string,
  timeframe: PropTypes.string,
  date: PropTypes.string,
};
Card.defaultProps = {
  old: true,
  status: 'Not found',
  timeframe: 'Unknown',
  date: 'Unknown',
};

export default Card;
