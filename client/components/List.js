import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = ({list, showForm, listId}) => {
  return ( 
    <div className={'list'}>
      <div className={'listTitle'}>{list.name}</div>
      <div className={'cardList'}>
        {list.cards.map((card, i) => (
          <>
            <Card key={i} cardId={i} card={card} updateCard={showForm} listId={listId}/>
          </>
        ))}
      </div>
      <button className={'newCard'} onClick={() => showForm('add', listId)}>New Card</button>
    </div>
   );
}

List.propTypes = {
  list: PropTypes.array,
  showForm: PropTypes.func,
  listId: PropTypes.numberf,
}

export default List;