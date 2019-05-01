import React, { Component } from 'react';
import List from './List';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [{title:'List1',cards:[{title:'Hello',description:'World',people:['nick', 'joe', 'sally']}]},{title:'List1',cards:[{title:'Hello',description:'World',people:['nick', 'joe', 'sally']}]},{title:'List1',cards:[{title:'Hello',description:'World',people:['nick', 'joe', 'sally']}]}]
    }
  }

  // let listStructure = {
  //   title: 'String',
  //   cards: [
  //     {
  //       title: 'String',
  //       description: 'String',
  //       people: 'Array',
  //       labels: 'Array',
  //       dueBy: 'String',
  //     }
  //   ]
  // }

  // let lists = [
  //   listStrucutre,
  //   listStrucutre,
  //   listStrucutre
  // ]

  addCard(listId, card) {
    console.log('Add a card');
    // let updatedList = [this.state.lists[listId]]
  }

  addList(e) {
    if (e.keyCode === 13) {
      if (e.target.value !== '') {
        let newLists = this.state.lists;
        let newList = {title: e.target.value, cards: []}
        newLists.push(newList);
        this.setState({lists: newLists});
      }
    }
  }

  render() { 
    return ( 
      <div className={'board'}>
        {this.state.lists.map((list, i) => (
          <List key={i} list={this.state.lists[i]} addCard={this.addCard.bind(this)} />
        ))}
        <div className={'newListRow'}>
          <input 
            type='text' 
            className={'newList'} 
            placeholder='Give me a name...'
            onKeyDown={e => this.addList(e)}
          >
          </input>
        </div>
      </div>
    );
  }
}
 
export default Board;