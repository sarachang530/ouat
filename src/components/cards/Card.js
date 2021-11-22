import React from 'react';
import './Card.scss';
import '../../styles/fonts.scss';

export const Card = ({ title, author, image, date }) => {

  return (
    <article className="card">
      <a className="card-image" href="#">
        <img src={image} alt="" />
      </a>

      <p className="date">{(new Date(date)).toLocaleDateString(undefined, {  year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h3 className="title">{title}</h3>

      <p className="author">
        Presented by <u>{author.toUpperCase()}</u>
      </p>
      <hr className="page-break"></hr>
    </article>
  );
};
