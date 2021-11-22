import React from 'react';
import '../../styles/mixins.scss';
import './header.scss';


export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="logo.svg" alt="sparta-logo" width="170" height="95" />
      </div>
      <nav className="header-nav">
        <p>212.555.5555</p>
        <p>LOGIN</p>
        <p>
        <svg className="hamburger" viewBox="0 0 50 50" width="20" height="20">
          <rect y="10" width="50" height="2"></rect>
          <rect y="25" width="50" height="2"></rect>
          <rect y="40" width="50" height="2"></rect>
        </svg>
        </p>
      </nav>
    </header>
  );
};
