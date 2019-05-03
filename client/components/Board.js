import React, { Component } from 'react';
import axios from 'axios';

import DisplayForm from './DisplayForm';
import List from './List';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardId: 2,
      lists: [],
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
    .then(results => {
        this.setState({lists: results.data.lists}, () => this.displayForm())
    })
    .catch(console.log);
  }

  addListToBoard(boardId, newList) {
    axios.post('/api/boards/list', {
      boardId: boardId, list: newList
    })
    .then(results => { this.setState({lists: results.data.lists}) })
    .catch(console.log);
  }


  //Turn form on or off set state with last opened card
  displayForm(formToDisplay = '', listId = 0, cardId = 0, card = {}, e) {
    if (e && e.target.localName === 'button') formToDisplay = '';
    this.setState({
      currentForm: formToDisplay,
      currentList: listId, 
      currentCard: card,
      currentCardId: cardId
    })
  }


  //Card methods
  addCard(card) {
    let updateBoard = [...this.state.lists];
    updateBoard[this.state.currentList].cards.push(card);

    this.updateBoardById(this.state.boardId, updateBoard);
  }

  updateCard(card) {
    let updateBoard = [...this.state.lists];
    updateBoard[this.state.currentList].cards[this.state.currentCardId] = card;

    this.updateBoardById(this.state.boardId, updateBoard);
  }

  destroyCard() {
    let updateBoard = [...this.state.lists];
    updateBoard[this.state.currentList].cards.splice(this.state.currentCardId, 1);

    this.updateBoardById(this.state.boardId, updateBoard);
  }

  move(cardId, listId, direction) {
    let updateBoard = [...this.state.lists];
    let newIndex = listId + direction;
    if (newIndex >= 0 && newIndex < updateBoard.length) {
      let movingCard = updateBoard[listId].cards[cardId];
      updateBoard[listId].cards.splice(cardId, 1);
      updateBoard[listId + direction].cards.push(movingCard);
      this.updateBoardById(this.state.boardId, updateBoard);
    }
  }


  //List methods
  addList(e) {
    if (e.keyCode === 13 && e.target.value !== '') {
      let newList = {name: e.target.value, cards: []}
      e.target.value = ''; //Reset input box
      this.addListToBoard(this.state.boardId, newList);
    }
  }

  destroyList(listId) {
    let updateBoard = [...this.state.lists];
    updateBoard.splice(listId, 1);

    this.updateBoardById(this.state.boardId, updateBoard);
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
            showForm={this.displayForm.bind(this)}
            move={this.move.bind(this)}
            destroyList={this.destroyList.bind(this)}
          />
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
          destroyCard={this.destroyCard.bind(this)}
          card={this.state.currentCard}
        />
      </div>
    );
  }
}
 
export default Board;