import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = ({list, showForm, listId}) => {
  return ( 
    <div className={'list'}>
      <div className={'listTitle'}>{list.name}</div>
      {list.cards.map((card, i) => (
        <>
          <Card key={i} card={card} />
        </>
      ))}
      <button className={'newCard'} onClick={() => showForm(listId)}>New Card</button>
    </div>
   );
}

List.propTypes = {
  list: PropTypes.array,
  showForm: PropTypes.func,
  listId: PropTypes.number,
}

export default List;