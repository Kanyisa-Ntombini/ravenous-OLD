import React from 'react';
import styles from './SearchBar.module.css';

function FilterInputs() {
  function filterFunction(event) {
    sessionStorage.setItem('FilterChoice', event.target.id);
    console.log(sessionStorage);
  }
  return (
    <section className={styles.FilterSection}>
      <div className={styles.Filter}>
        <p
          className={styles.FilterOptions}
          id="bestMatch"
          onClick={filterFunction}
        >
          Best Match
        </p>
        <p
          className={styles.FilterOptions}
          id="highestRated"
          onClick={filterFunction}
        >
          Highest Rated
        </p>
        <p
          className={styles.FilterOptions}
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

function SearchInputs() {
  return (
    <div className={styles.Inputs}>
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
    const sortBy = sessionStorage.getItem('FilterChoice');

    console.log(`location = ${location}`);
    console.log(`term = ${term}`);
    console.log(`radius = ${radius}`);
    console.log(`sortBy = ${sortBy}`);
  }

  return <button onClick={searchInfo}>Let's Go</button>;
}

function SearchBar() {
  return (
    <section className={styles.SearchBar}>
      <FilterInputs />
      <SearchInputs />
      <SearchButton />
    </section>
  );
}

export default SearchBar;
