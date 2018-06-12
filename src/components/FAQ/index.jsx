import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const FAQ = ({ question, answer }) => (
  <div className="faq">
    <div className="faq-card-border">
      <h3>{question}</h3>
      <div className="faq-card">
        <h4>{answer}</h4>
      </div>
    </div>
  </div>
);

FAQ.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

FAQ.defaultProps = {
  question: 'No question found',
  answer: 'No answer found',
};

export default FAQ;
