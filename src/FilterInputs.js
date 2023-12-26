import React from 'react';
import classNamesObject from './utils/classes';

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

export default FilterInputs;
