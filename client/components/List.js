import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = ({list, showForm, listId, destroyList}) => {
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
      <button className={'destroyList'} onClick={() => destroyList(listId)}>Destroy List</button>
    </div>
   );
}

List.propTypes = {
  list: PropTypes.array,
  showForm: PropTypes.func,
  listId: PropTypes.number,
  destroyList: PropTypes.func,
}

export default List;