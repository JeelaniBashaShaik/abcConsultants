import React from 'react';

const FilterQueryComponent = props => {
    const [query, setQuery] = React.useState('');
    return (
        <div className="filterQuery">
            <input type="text" className="inputRowItem" value={query} disabled={!props.hasRepos} placeholder="enter repo names to filter" onChange={event => {
                setQuery(event.target.value);
                props.filterRepos(event.target.value);
            }} />
            <button className="inputRowItem" onClick={() => {
                setQuery('');
                props.clearFilter();
            }} disabled={!query}>
                Clear
            </button>
        </div>
    )
}

export default FilterQueryComponent;