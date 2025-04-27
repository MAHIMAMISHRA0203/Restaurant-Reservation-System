import React from 'react';
import './MenuPage.css';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

const MenuPage = () => {
  return (
    <div className="menu-page">
      <Navbar />
      <div className="menu-container" style={{ marginTop: '80px' }}>
        <Menu />
      </div>
    </div>
  );
};

export default MenuPage;
