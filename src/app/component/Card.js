import React from 'react';
import Slider1 from '../../../public/image1.jpg'
import Image from 'next/image';

const Card = ({ title, description, img }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{description}</p>
        <Image src={img} width={350} height={350} />
      </div>
    </div>
  );
};

export default Card;