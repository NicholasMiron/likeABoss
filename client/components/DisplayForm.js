import React from 'react';
import PropTypes from 'prop-types';
import CardForm from './CardForm';

const DisplayForm = ({whichForm, boardMembers, addCard, updateCard, destroyCard, card}) => {
  if (whichForm === 'add') {
    return (
      <div id={'modal'}>
        <CardForm boardMembers={boardMembers} handleSubmit={addCard} handleDestroy={destroyCard} card={card} destroy={false}/>
      </div>
    )
  } else if (whichForm === 'update') {
    return (
      <div id={'modal'}>
        <CardForm boardMembers={boardMembers} handleSubmit={updateCard} handleDestroy={destroyCard} card={card} destroy={true}/>
      </div>
    )
  } else return <></>
}
 
DisplayForm.propTypes = {
  whichForm: PropTypes.string,
  boardMembers: PropTypes.array,
  addCard: PropTypes.func,
  updateCard: PropTypes.func,
  destroyCard: PropTypes.func,
  card: PropTypes.object,
}

export default DisplayForm;