import React from 'react';

const ListItems = props => {
    return (
        <div className="listItems">
            {
                props.repoDetails.map(repo => {
                    return (
                        <div key={repo.name} className="listItem">{repo.name}</div>
                    )
                })
            }
        </div>
    )
}

export default ListItems;