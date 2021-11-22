import React from 'react';
import './Slider.scss';

export const HeroText = ({ title, subtitle, date }) => {
  return (
    <div className="hero-text">
      {console.log(title)}
      <h1>{title}</h1>
      <h2>{date}</h2>
      <p>{subtitle}</p>
    </div>
  );
};
