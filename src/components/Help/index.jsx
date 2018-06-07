import React from 'react';
import './style.css';
import Menu from '../Menu';
import FAQ from '../FAQ';

const Help = () => (
  <div className="help">
    <Menu skeleton={false} backUrl="/" showBackButton />
    <FAQ question="Wat is Timeframe?" answer="Timeframe is een service die een accurate tijdsvoorspelling geeft voor het bezorgen van je pakket" />
    <FAQ question="Hoe krijg ik mijn Timeframe?" answer="Vul de tracking code in die je van FedEx hebt gekregen en wij berekenen je Timeframe" />
  </div>
);

export default Help;
