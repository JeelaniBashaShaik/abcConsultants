import React from 'react';
import PropTypes from 'prop-types';

const FilterQueryComponent = (props) => {
  const [query, setQuery] = React.useState('');
  return (
    <div className="filterQuery">
      <input
        type="text"
        className="inputRowItem"
        id="filterInputBox"
        value={query}
        disabled={!props.hasRepos}
        placeholder="enter repo names to filter"
        onChange={(event) => {
          setQuery(event.target.value);
          props.filterRepos(event.target.value);
        }}
      />
      <button
        type="button"
        className="inputRowItem"
        id="filterClearButton"
        onClick={() => {
          setQuery('');
          props.clearFilter();
        }}
        disabled={!query}
      >
        Clear
      </button>
    </div>
  );
};

FilterQueryComponent.propTypes = {
    hasRepos: PropTypes.bool,
    filterRepos: PropTypes.func,
    clearFilter: PropTypes.func,
};

FilterQueryComponent.defaultProps = {
    hasRepos: false,
    filterRepos: () => {},
    clearFilter: () => {},
};

export default FilterQueryComponent;
