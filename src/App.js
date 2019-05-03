import React, { Component } from 'react';
import './App.css';
import CreateThought from './createThought/CreateThought';
import { ThoughtList } from './thoughtList/ThoughtList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      thoughts: []
    };
  }

  createThought = (thought) => {
    const { thoughts } = this.state
    const newThought = {...thought, id: thoughts.length}
    this.setState({ thoughts: [...thoughts, newThought] });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>ThoughtBox</h2>
        </div>
        <CreateThought createThought={this.createThought} />
        <div>
          <ThoughtList thoughtList={this.state.thoughts} />
        </div>
      </div>
    );
  }
}

export default App;
