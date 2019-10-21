import React from 'react';

const InputQueryComponent = (props) => {
    const [userName, setUserName] = React.useState('');
    return (
        <div className="inputQuery">
            <input type="text" className="inputRowItem" value={userName} placeholder="enter user-name" onChange={event => setUserName(event.target.value)} />
            <button onClick={() => props.fetchRepos(userName)} className="inputRowItem goButton" disabled={!userName}>Go</button>
            <button className="inputRowItem" onClick={() => {
                setUserName('');
                props.clearUserName();
            }} disabled={!userName}>
                Clear
            </button>
        </div>
    )
}

export default InputQueryComponent;