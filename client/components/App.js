import React, {Component} from 'react';
import Board from './Board';
import Header from './Header';
import '../styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Like A Bo$$",
      boardId: 2,
    }
  }

  changeBoardId() {

  }

  render() {
    return (
      <div>
        <Header changeBoardId={this.changeBoardId.bind(this)} />
        <Board boardId={this.state.boardId}/>
      </div>
    )
  }
}

export default App;