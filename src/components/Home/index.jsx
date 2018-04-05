import React from 'react';
import './style.css';
import Menu from '../Menu';
import Time from '../Time';

const Home = () => (
  <div className="home">
    <Menu skeleton={false} />
    <Time skeleton={false} />
  </div>
);

export default Home;
