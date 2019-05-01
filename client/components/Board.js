import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import AddCardForm from './AddCardForm';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardId: 2,
      lists: [{title:'List1',cards:[{title:'Hello',description:'World',people:['nick', 'joe', 'sally']}]},{title:'List1',cards:[{title:'Hello',description:'World',people:['nick', 'joe', 'sally']}]},{title:'List1',cards:[{title:'Hello',description:'World',people:['nick', 'joe', 'sally']}]}],
      boardMembers: ['Lion', 'Tiger', 'Ardvark', 'Mary Poppins'],
      currentList: 0,
    }
  }

  componentDidMount() {
    axios.get('/api/boards?id=' + this.state.boardId)
    .then(results => {
      this.setState({lists: results.data.lists})
    })
    .catch(err => {
      console.log(err);
    })
  }

  showCardForm(listId) {
    document.getElementById('addCardForm').style.display = 'block';
    this.setState({currentList: listId})
    // let updatedList = [this.state.lists[listId]]
  }

  addCard(card) {
    let updateBoard = [...this.state.lists];
    updateBoard[this.state.currentList].cards.push(card);
    this.setState({currentList: updateBoard})
    document.getElementById('addCardForm').style.display = 'none';
  }

  addList(e) {
    if (e.keyCode === 13) {
      if (e.target.value !== '') {
        axios.post('/api/boards/list', {
          boardId: 2, 
          list: {
            name: e.target.value, 
            cards: []
          }
        })
        .then(results => { this.setState({lists: results.data.lists}) })
        .catch(err => { console.log(err) })
      }
    }
  }

  render() { 
    return ( 
      <div className={'board'}>
        {this.state.lists.map((list, i) => (
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