import React from 'react';
import styles from './Business.module.css';
import foodBusinessImage from './food-business-image-1.jpg';

const businessContentObject = {
  imageSrc: foodBusinessImage,
  name: "Kanyi's Corner",
  address: '122 Sunnyhill Street',
  city: 'Fairy Town',
  state: 'Fairytale Land',
  zipCode: 8888,
  category: 'lacto-ovo vegetarian',
  rating: 4.8,
  reviewCount: 120,
};

function Business() {
  return (
    <div className={styles.Business}>
      <figure>
        <img src={businessContentObject.imageSrc} alt="Some food" />
        <h3>{businessContentObject.name}</h3>
      </figure>

      <div className={styles.FlexItems}>
        <div className={styles.BusinessAddress}>
          <p>{businessContentObject.address}</p>
          <p>{businessContentObject.city}</p>
          <p>
            {businessContentObject.state + ' ' + businessContentObject.zipCode}
          </p>
        </div>

        <div className={styles.MoveRight}>
          <p>{businessContentObject.category}</p>
          <p>{businessContentObject.rating}</p>
          <p>{businessContentObject.reviewCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
