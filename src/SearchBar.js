import React from 'react';

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

export default SearchBar;
