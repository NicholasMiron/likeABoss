import React, {Component} from 'react';
import Board from './Board';
import '../styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World!"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <Board />
      </div>
    )
  }
}

export default App;