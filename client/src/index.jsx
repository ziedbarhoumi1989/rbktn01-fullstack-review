import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search(term) {
    console.log(`${term} was searched`);
    // TODO
    axios.post('/repos', {
      term: term,

    })
      .then(response => {
        console.log(response)
        this.setState({
          repos: response.data
        })
        console.log(this.state.repos)
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));