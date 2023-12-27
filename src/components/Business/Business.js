import React from 'react';
import styles from './Business.module.css';

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
    <div className={styles.Business}>
      <figure>
        <img src={imageSrc} alt="Some food" />
        <h3>{name}</h3>
      </figure>

      <div className={styles.FlexItems}>
        <div className={styles.BusinessAddress}>
          <p>{address}</p>
          <p>{city}</p>
          <p>{state + ' ' + zipCode}</p>
        </div>

        <div className={styles.MoveRight}>
          <p>{category}</p>
          <p>{rating}</p>
          <p>{reviewCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
