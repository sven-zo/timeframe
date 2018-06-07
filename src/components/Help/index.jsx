import React from 'react';
import './style.css';
import Menu from '../Menu';
import FAQ from '../FAQ';

const Help = () => (
  <div className="help">
    <Menu skeleton={false} backUrl="/" showBackButton />
    <FAQ />
  </div>
);

export default Help;
