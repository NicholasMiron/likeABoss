import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      title: '',
      description: '',
      selectedMembers: [],
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.closeForm.bind(this));
    this.setState({
      title: this.props.card.title || '',
      description: this.props.card.description || '',
    })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSelect(e) {
    let members = [...this.state.selectedMembers];
    if (members.includes(e.target.value)) {
      let targetIndex = members.indexOf(e.target.value);
      members.splice(targetIndex, 1); 
    } else members.push(e.target.value);
    this.setState({selectedMembers: members})
  }

  handleSubmit(e) {
    e.preventDefault();
    let newCard = {
      title: this.state.title,
      description: this.state.description,
      people: this.state.selectedMembers,
    }
    this.props.handleSubmit(newCard);
  }

  closeForm(e) {
    if (e.target.id === 'modal') this.handleSubmit(e);
  }

  render() { 
    return (  
      <div id={'cardForm'}>
        <div className={'formTitle'}>
          <label htmlFor={'title'}>Snippet of what needs to be done.</label>
          <input 
            onChange={e => this.handleChange(e)} 
            type='text' 
            name='title' 
            placeholder='Title...'
            value={this.state.title}
          ></input>
        </div>
        <div className={'formDescription'}>
          <label htmlFor={'description'}>More details!</label>
          <textarea 
            rows={5}
            col={50}
            onChange={e => this.handleChange(e)} 
            name='description' 
            placeholder='Description...'
            value={this.state.description}
            ></textarea>
        </div>
        <div className={'assignMembers'} name={'assignMembers'}>
          <label htmlFor={'assignMembers'}>Add people to card.</label>
          {this.props.boardMembers.map((member, i) => (
            <>
              <input onChange={e => this.handleSelect(e)} type='checkbox' name={'member' + i} id={member} value={member} key={i}></input>
              <label htmlFor={member}>{member}</label>
            </>
          ))}
        </div>
        {this.props.destroy ? <button className={'formButton'} onClick={e => this.props.handleDestroy(e)}>Destroy!</button> : <></>}
        <button className={'formButton'} onClick={e => this.handleSubmit(e)}>Submit!</button>
      </div>
    );
  }
}

CardForm.propTypes = {
  formId: PropTypes.string,
  card: PropTypes.object,
  boardMembers: PropTypes.array,
  handleSubmit: PropTypes.func,
  handleDestroy: PropTypes.func,
  destroy: PropTypes.bool,
}
 
export default CardForm;