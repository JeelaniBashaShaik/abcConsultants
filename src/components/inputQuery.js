import React from 'react';
import PropTypes from 'prop-types';

const InputQueryComponent = (props) => {
  const [userName, setUserName] = React.useState('');
  return (
    <div className="inputQuery">
      <input type="text" className="inputRowItem" id="userInputBox" value={userName} placeholder="enter user-name" onChange={(event) => setUserName(event.target.value)} />
      <button type="button" onClick={() => props.fetchRepos(userName)} className="inputRowItem goButton" id="goButton" disabled={!userName}>Go</button>
      <button
        type="button"
        className="inputRowItem"
        id="clearButton"
        onClick={() => {
          setUserName('');
          props.clearUserName();
        }}
        disabled={!userName}
      >
        Clear
      </button>
    </div>
  );
};

InputQueryComponent.propTypes = {
    fetchRepos: PropTypes.func,
    clearUserName: PropTypes.func,
};

InputQueryComponent.defaultProps = {
    fetchRepos: () => {},
    clearUserName: () => {},
};

export default InputQueryComponent;
