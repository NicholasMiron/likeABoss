import React from 'react';
import PropTypes from 'prop-types';
import CardForm from './CardForm';

const DisplayForm = ({whichForm, boardMembers, addCard, updateCard, card}) => {
  if (whichForm === 'add') {
    return (
      <div id={'modal'}>
        <CardForm boardMembers={boardMembers} handleSubmit={addCard} card={card} />
      </div>
    )
  } else if (whichForm === 'update') {
    return (
      <div id={'modal'}>
        <CardForm boardMembers={boardMembers} handleSubmit={updateCard} card={card} />
      </div>
    )
  } else return <></>
}
 
DisplayForm.propTypes = {
  whichForm: PropTypes.string,
  boardMembers: PropTypes.array,
  addCard: PropTypes.func,
  updateCard: PropTypes.func,
  card: PropTypes.object,
}

export default DisplayForm;