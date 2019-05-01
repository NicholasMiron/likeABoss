import React, { Component } from 'react';
import List from './List';
import AddCardForm from './AddCardForm';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardId: 1,
      board: [{title:'List1',cards:[{title:'Hello',description:'World',people:['nick', 'joe', 'sally']}]},{title:'List1',cards:[{title:'Hello',description:'World',people:['nick', 'joe', 'sally']}]},{title:'List1',cards:[{title:'Hello',description:'World',people:['nick', 'joe', 'sally']}]}],
      boardMembers: ['Lion', 'Tiger', 'Ardvark', 'Mary Poppins'],
      currentList: 0,
    }
  }

  showCardForm(listId) {
    document.getElementById('addCardForm').style.display = 'block';
    this.setState({currentList: listId})
    // let updatedList = [this.state.lists[listId]]
  }

  addCard(card) {
    let updateBoard = [...this.state.board];
    updateBoard[this.state.currentList].cards.push(card);
    this.setState({currentList: updateBoard})
    document.getElementById('addCardForm').style.display = 'none';
  }

  addList(e) {
    if (e.keyCode === 13) {
      if (e.target.value !== '') {
        let newLists = this.state.lists;
        let newList = {title: e.target.value, cards: []}
        newLists.push(newList);
        e.target.value = '';
        this.setState({lists: newLists});
      }
    }
  }

  render() { 
    return ( 
      <div className={'board'}>
        {this.state.board.map((list, i) => (
          <List key={i} listId={i} boardMembers={this.state.boardMembers} list={list} showForm={this.showCardForm.bind(this)} />
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
        <AddCardForm boardMembers={this.state.boardMembers} addCard={this.addCard.bind(this)}/>
      </div>
    );
  }
}
 
export default Board;