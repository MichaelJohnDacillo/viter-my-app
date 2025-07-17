import React from 'react'

const CardsTestimony = ({image, alt, testimony, name, position}) => {
  return (
    <>
        <div class="testimonialsItem">
        <img src={image} alt={alt} />
        <p>
          "{testimony}"
        </p>
        <h6>{name}</h6>
        <small>{position}</small>
      </div>
    </>
  );
};

export default CardsTestimony;