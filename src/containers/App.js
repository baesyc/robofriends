import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      robots: []
    }
  }

  changeInput = e => {
    this.setState({query: e.target.value});
  }

  componentDidMount = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(users => {
        this.setState({robots: users});
      })
  }

  render() {
    const {query, robots} = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(query.toLowerCase());
    })

    return (
      <div className="app tc">
        <div className="title">RoboFriends</div>
        <SearchBox changeInput={this.changeInput} />
        <Scroll>
          <div className="card-list">
            <CardList robots={filteredRobots} />
          </div>
        </Scroll>
      </div>
    );
  }
}

export default App;