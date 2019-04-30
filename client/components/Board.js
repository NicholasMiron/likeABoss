import React, { Component } from 'react';
import List from './List';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [[{description:'hello', person:'nick'}],[{description:'hello', person:'nick'}],[{description:'hello', person:'nick'}],[{description:'hello', person:'nick'}],[{description:'hello', person:'nick'}]],
    }
  }
  render() { 
    return ( 
      <div className={'board'}>
        {this.state.lists.map((list, i) => (
          <List key={i} list={this.state.lists[i]} />
        ))}
      </div>
    );
  }
}
 
export default Board;