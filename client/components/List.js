import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = ({list, showForm, listId, destroyList, move}) => {
  return ( 
    <div className={'list'}>
      <div className={'listTitle'}>{list.name}</div>
      <div className={'cardList'}>
        {list.cards.map((card, i) => (
          <>
            <Card key={i} cardId={i} card={card} updateCard={showForm} listId={listId} move={move}/>
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
  move: PropTypes.func,
}

export default List;