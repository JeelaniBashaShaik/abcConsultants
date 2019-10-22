import React from 'react';

const FilterQueryComponent = props => {
    const [query, setQuery] = React.useState('');
    return (
        <div className="filterQuery">
            <input type="text" className="inputRowItem" id="filterInputBox" value={query} disabled={!props.hasRepos} placeholder="enter repo names to filter" onChange={event => {
                setQuery(event.target.value);
                props.filterRepos(event.target.value);
            }} />
            <button className="inputRowItem" id="filterClearButton" onClick={() => {
                setQuery('');
                props.clearFilter();
            }} disabled={!query}>
                Clear
            </button>
        </div>
    )
}

export default FilterQueryComponent;