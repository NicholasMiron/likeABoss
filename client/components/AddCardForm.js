import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddCardForm extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      title: '',
      description: '',
      selectedMembers: [],
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSelect(e) {
    let members = this.state.selectedMembers;
    if (members.includes(e.target.value)) {
      let targetIndex = members.indexOf(e.target.value);
      members.splice(targetIndex, 1); 
    } else {
      members.push(e.target.value);
    }
    this.setState({selectedMembers: members})
  }

  handleSubmit(e) {
    console.log('here');
    e.preventDefault();
    let newCard = {
      title: this.state.title,
      description: this.state.description,
      people: this.state.selectedMembers,
    }
    this.props.addCard(newCard);
  }

  render() {
    return ( 
      <div id={'addCardForm'}>
        <form>
          <input onChange={e => this.handleChange(e)} type='text' name='title' placeholder='Title...'></input>
          <input onChange={e => this.handleChange(e)} type='text' name='description' placeholder='Description...'></input>
          {this.props.boardMembers.map((member, i) => (
            <>
              <input onChange={e => this.handleSelect(e)} type='checkbox' name={'member' + i} id={member} value={member} key={i}></input>
              <label htmlFor={member}>{member}</label>
            </>
          ))}
          <button onClick={e => this.handleSubmit(e)}>Submit!</button>
        </form>
      </div>
    );
  }
}

AddCardForm.propTypes = {
  boardMembers: PropTypes.array,
  addCard: PropTypes.func,
  listId: PropTypes.number
}
 
export default AddCardForm;