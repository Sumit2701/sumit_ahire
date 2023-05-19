import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
  const ad = props.ad;

  return (
    <div className='card-container'>
      <img
        src={ad.url}
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
         {ad.CTA}
        </h2>
        <h3>{ad.primaryText}</h3>
        <p>{ad.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
