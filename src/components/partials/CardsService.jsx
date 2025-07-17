import React from "react";

const CardsService = ({image, alt, title, details, more}) => {
  return (
    <>
      <div class="card">
        <img
          src={image}
          alt={alt}
        />
        <h3>{title}</h3>
        <p>
         {details}
        </p>
        <a href="#">{more} &rarr;</a>
      </div>
    </>
  );
};

export default CardsService;
