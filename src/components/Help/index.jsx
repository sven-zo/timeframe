import React from 'react';
import './style.css';
import Menu from '../Menu';
import FAQ from '../FAQ';

const Help = () => (
  <div className="help">
    <Menu skeleton={false} backUrl="/information" showBackButton />
    <FAQ
      question="What is Timeframe?"
      answer="Timeframe is a service that provides an accurate time frame of when your package will be delivered"
    />
    <FAQ
      question="How do I obtain my Timeframe?"
      answer="Fill in the tracking code of your package and we will calculate your time frame"
    />
  </div>
);

export default Help;
