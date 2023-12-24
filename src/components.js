import React from 'react';
import { classNamesObject, businessObject } from './utility_objects';

sessionStorage.clear();

function Business() {
  return (
    <div className="business">
      <figure>
        <img src={businessObject.imageSrc} alt="Some food" />
      </figure>

      <h3>{businessObject.name}</h3>

      <div className="business-address">
        <p>{businessObject.address}</p>
        <p>{businessObject.city}</p>
        <p>{businessObject.state}</p>
        <p>{businessObject.zipCode}</p>
      </div>

      <p>{businessObject.category}</p>
      <p>{businessObject.rating}</p>
      <p>{businessObject.reviewCount}</p>
    </div>
  );
}

function BusinessList() {
  const something = [];
  for (let i = 0; i < 9; i++) {
    something.push(<Business />);
  }

  const business = something.map((business, index) => (
    <li key={index}>
      <Business />
    </li>
  ));

  return (
    <section className="business-list">
      <ul>{business}</ul>
    </section>
  );
}

function SearchInputs() {
  return (
    <div className="inputs">
      <input id="searchBusinessTerm" placeholder="Search Businesses" />
      <input id="searchBusinessArea" placeholder="Where?" />
    </div>
  );
}

function SearchButton() {
  function searchInfo() {
    const searchBusinessTerm = document.getElementById('searchBusinessTerm');
    const searchBusinessArea = document.getElementById('searchBusinessArea');

    const term = searchBusinessTerm.value;
    const location = searchBusinessArea.value;
    const radius = 1000;
    const sortBy = sessionStorage.getItem('filterChoice');

    console.log(`location = ${location}`);
    console.log(`term = ${term}`);
    console.log(`radius = ${radius}`);
    console.log(`sortBy = ${sortBy}`);
  }

  return <button onClick={searchInfo}>Let's Go</button>;
}

function SearchBar() {
  return (
    <section className="search-bar">
      <SearchInputs />
      <SearchButton />
    </section>
  );
}

function FilterInputs() {
  function filterFunction(event) {
    sessionStorage.setItem('filterChoice', event.target.id);
  }
  return (
    <section className="filter-section">
      <div className="filter">
        <p
          className={classNamesObject.filterOptions}
          id="bestMatch"
          onClick={filterFunction}
        >
          Best Match
        </p>
        <p
          className={classNamesObject.filterOptions}
          id="highestRated"
          onClick={filterFunction}
        >
          Highest Rated
        </p>
        <p
          className={classNamesObject.filterOptions}
          id="mostReviewed"
          onClick={filterFunction}
        >
          Most Reviewed
        </p>
      </div>
      <hr />
    </section>
  );
}

export { BusinessList, SearchBar, FilterInputs };
