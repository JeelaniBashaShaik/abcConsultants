import React from 'react';
import axios from './axiosProxy';
import './App.css';

export default class App extends React.Component {
  
  state = {
    userName: '',
    repoDetails: []
  };

  fetchRepos = async () => {
    const { userName } = this.state;
    const { data: apiResponse } = await axios.get(`https://api.github.com/users/${userName}/repos`);
    this.setState({ repoDetails: apiResponse });
    console.log(apiResponse, 'apiResponse');
  }

  setUserName = (event) => {
    const userName = event.target.value;
    this.setState({ userName: userName });
    console.log(userName);
  }

  renderList = () => {
    const { repoDetails } = this.state;
    return (
      <div className="listItems">
      {
        repoDetails.map(repo => {
          return (
            <p key={repo.name}>{repo.name}</p>
          )
        })
      }
      </div>
    )
  }

  render () {
    return (
      <div className="mainLayout">
        <div>
          <input type="text" placeholder="enter user-name" onChange={this.setUserName}/> <button onClick={this.fetchRepos}>Go</button> <button>Clear</button>
          {
            this.state.repoDetails.length > 0 ? <div>{this.renderList()}</div> :  <div>No Details Found</div>
          }
        </div>
      </div>
    );
  }
  
}
