import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import DisplayForm from './DisplayForm';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardId: 2,
      lists: [{title:'List1',cards:[{title:'Hello',description:'World',people:['nick', 'joe', 'sally']}]},{title:'List1',cards:[{title:'Hello',description:'World',people:['nick', 'joe', 'sally']}]},{title:'List1',cards:[{title:'Hello',description:'World',people:['nick', 'joe', 'sally']}]}],
      boardMembers: ['Lion', 'Tiger', 'Ardvark', 'Mary Poppins'],
      currentList: 0,
      currentCard: {},
      currentCardId: 0,
      currentForm: '',
    }
  }


  //Initialize board
  componentDidMount() {
   this.getBoardById(this.state.boardId);
  }


  //Axios Requests
  getBoardById(boardId) {
    axios.get('/api/boards?id=' + boardId)
    .then(results => this.setState({lists: results.data.lists}))
    .catch(console.log);
  }

  updateBoardById(boardId, newLists) {
    axios.put('/api/boards/list', {boardId: boardId, lists: newLists})
    .then(results => this.setState({currentList: results}))
    .catch(console.log);
  }

  addListToBoard(boardId, newList) {
    axios.post('/api/boards/list', {
      boardId: boardId, list: newList
    })
    .then(results => { this.setState({lists: results.data.lists}) })
    .catch(console.log);
  }


  //Helper functions
  displayForm(formToDisplay, listId, cardId = 0, card = {}) {
    this.setState({
      currentForm: formToDisplay,
      currentList: listId, 
      currentCard: card,
      currentCardId: cardId
    })
  }

  addCard(card) {
    let updateBoard = [...this.state.lists];
    updateBoard[this.state.currentList].cards.push(card);

    this.updateBoardById(this.state.boardId, updateBoard);
    document.getElementById('cardForm').style.display = 'none';
  }

  updateCard(card) {
    let updateBoard = [...this.state.lists];
    updateBoard[this.state.currentList].cards[this.state.currentCardId] = card;

    this.updateBoardById(this.state.boardId, updateBoard);
    document.getElementById('cardForm').style.display = 'none';
  }

  addList(e) {
    if (e.keyCode === 13 && e.target.value !== '') {
      let newList = {name: e.target.value, cards: []}
      this.addListToBoard(this.state.boardId, newList);
    }
  }

  render() { 
    return ( 
      <div className={'board'}>
        {this.state.lists.map((list, i) => (
          <List 
            key={i} 
            list={list} 
            listId={i} 
            boardMembers={this.state.boardMembers}
            showForm={this.displayForm.bind(this)} />
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
        <DisplayForm 
          whichForm={this.state.currentForm}
          boardMembers={this.state.boardMembers}
          addCard={this.addCard.bind(this)}
          updateCard={this.updateCard.bind(this)}
          card={this.state.currentCard}
        />
        {/* <AddCardForm boardMembers={this.state.boardMembers} addCard={this.addCard.bind(this)}/> */}
        {/* <EditCardForm boardMembers={this.state.boardMembers} updateCard={this.updateCard.bind(this)} card={this.state.currentCard}/> */}
      </div>
    );
  }
}
 
export default Board;