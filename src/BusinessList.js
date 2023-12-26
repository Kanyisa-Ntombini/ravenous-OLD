import React from 'react';
import businessContent from './utils/businesses_arr';
import Business from './Business';

function BusinessList() {
  const businessList = businessContent.map((businessObject, index) => {
    return (
      <Business
        key={index}
        imageSrc={businessObject.imageSrc}
        name={businessObject.name}
        address={businessObject.address}
        city={businessObject.city}
        state={businessObject.state}
        zipCode={businessObject.zipCode}
        category={businessObject.category}
        rating={businessObject.rating}
        reviewCount={businessObject.rating}
      />
    );
  });

  return <section className="business-list">{businessList}</section>;
}

export default BusinessList;
