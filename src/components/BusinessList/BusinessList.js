import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

function BusinessList() {
  return (
    <section className={styles.BusinessList}>
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
    </section>
  );
}

export default BusinessList;
