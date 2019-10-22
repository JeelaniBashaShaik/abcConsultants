import React from 'react';
import axios from '../axiosProxy';
import InputQuery from './inputQuery';
import FilterQueryComponent from './filterQuery';
import ListItems from './listItems';

export default class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repoDetails: [], // to hold the list items
      repoDetailsBackup: [], // backup is useful while filtering the list
    };
  }

  // makes the api call on click of Go button
  fetchRepos = async (userName) => {
    try {
      const { data: apiResponse } = await axios.get(`https://api.github.com/users/${userName}/repos`);
      if (apiResponse.length) {
        this.setState({
          repoDetails: apiResponse,
          repoDetailsBackup: apiResponse,
        });
      } else {
        console.log('no repos found');
      }
    } catch (error) {
      console.log('error occured', error);
    }
  }

  // clears the list when clear button is clicked --> for username
  clearUserName = () => {
    this.setState({
      repoDetails: [],
      repoDetailsBackup: [],
    });
  }

  // filters the list based on repository name
  filterRepos = (query) => {
    const { repoDetailsBackup } = this.state;
    if (query === '') {
      this.setState({ repoDetails: repoDetailsBackup }); // in case user erases using backspace
    } else {
      const queryResult = repoDetailsBackup.filter((repo) => {
        const repoName = repo.name.toLowerCase(); // making sure the search is case-insensitive
        if (repoName.indexOf(query) > -1) {
          return repo; // match found and returning
        }
        return null;
      });
      this.setState({ repoDetails: queryResult });
    }
  }

  // resets the list from backup, when clear button is clicked --> for filter
  clearFilter = () => {
    const { repoDetailsBackup } = this.state;
    this.setState({ repoDetails: repoDetailsBackup });
  }

  render() {
    return (
      <div className="mainLayout">
        <div className="layoutItem">
          <div className="inputContainer pad20 noBottomPad">
            <InputQuery fetchRepos={this.fetchRepos} clearUserName={this.clearUserName} />
          </div>
          <div className="inputContainer pad20">
            <FilterQueryComponent
              clearFilter={this.clearFilter}
              filterRepos={this.filterRepos}
              hasRepos={this.state.repoDetailsBackup.length > 0}
            />
          </div>
          {
            this.state.repoDetails.length > 0
              ? <div id="listContainer"><ListItems repoDetails={this.state.repoDetails} /></div>
              : <div className="pad20">No repositories to list</div>
          }
        </div>
      </div>
    );
  }
}
