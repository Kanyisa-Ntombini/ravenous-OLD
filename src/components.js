import React from 'react';
import foodBusinessImage from './food-business-image.jpg';

const businessObject = {
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
    <div className="business">
      <figure>
        <img src={businessObject.imageSrc} alt="Some food" />
      </figure>

      <h3>{businessObject.name}</h3>

      <ul>
        <li>{businessObject.address}</li>
        <li>{businessObject.city}</li>
        <li>{businessObject.state}</li>
        <li>{businessObject.zipCode}</li>
      </ul>

      <p>{businessObject.category}</p>
      <p>{businessObject.rating}</p>
      <p>{businessObject.reviewCount}</p>
    </div>
  );
}

function BusinessList() {
  const business = [];
  for (let i = 0; i < 9; i++) {
    business.push(<Business />);
  }

  return (
    <section>
      <ul>{business}</ul>
    </section>
  );
}

function SearchBar() {
  return (
    <section className="search-bar">
      <div className="inputs">
        <input id="searchBusinessName" placeholder="Search Business" />
        <input id="searchBusinessArea" placeholder="Where?" />
      </div>

      <button
        onClick={function () {
          alert('Hello');
        }}
      >
        Let's Go
      </button>
    </section>
  );
}

export { BusinessList, SearchBar };
