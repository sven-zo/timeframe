import React from 'react';
import './style.css';
import Menu from '../Menu';
import Time from '../Time';

const Home = () => (
  <div className="home">
    <Menu skeleton="skeleton" />
    <Time />
  </div>
);

export default Home;
