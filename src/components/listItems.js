import React from 'react';
import PropTypes from 'prop-types';

const ListItems = (props) => (
  <div id="listItems">
    {
        props.repoDetails.map((repo) => (
          <div key={repo.name} className="listItem">{repo.name}</div>
        ))
    }
  </div>
);

ListItems.propTypes = {
    repoDetails: PropTypes.arrayOf(PropTypes.object),
};

ListItems.defaultProps = {
    repoDetails: [],
};

export default React.memo(ListItems);
