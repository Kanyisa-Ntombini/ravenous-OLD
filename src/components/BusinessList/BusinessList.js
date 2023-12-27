import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

function BusinessList(props) {
  const businessList = props.arrOfBusinesses.map(
    (
      {
        imageSrc,
        name,
        address,
        city,
        state,
        zipCode,
        category,
        rating,
        reviewCount,
      },
      index
    ) => {
      return (
        <Business
          key={index}
          name={name}
          imageSrc={imageSrc}
          address={address}
          city={city}
          state={state}
          zipCode={zipCode}
          category={category}
          rating={rating}
          reviewCount={reviewCount}
        />
      );
    }
  );

  return <section className={styles.BusinessList}>{businessList}</section>;
}

export default BusinessList;
