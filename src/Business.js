import React from 'react';

function Business({
  imageSrc,
  name,
  address,
  city,
  state,
  zipCode,
  category,
  rating,
  reviewCount,
}) {
  return (
    <div className="business">
      <figure>
        <img src={imageSrc} alt="Some food" />
      </figure>

      <h3>{name}</h3>

      <div className="business-address">
        <p>{address}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{zipCode}</p>
      </div>

      <p>{category}</p>
      <p>{rating}</p>
      <p>{reviewCount}</p>
    </div>
  );
}

export default Business;
