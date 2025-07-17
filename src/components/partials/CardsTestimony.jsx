import React from "react";

const CardsTestimony = ({ image, alt, testimony, name, position }) => {
  return (
    <>
      <div className="w-full flex-shrink-0 px-4">
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <img
            src={image}
            alt={alt}            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-gray-600 italic mb-4">
            "{testimony}"
          </p>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
    </>
  );
};

export default CardsTestimony;
