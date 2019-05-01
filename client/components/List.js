import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = ({list, addCard}) => {
  return ( 
    <div className={'list'}>
      <div className={'listTitle'}>{list.title}</div>
      {list.cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
      <button className={'newCard'} onClick={() => addCard()}>New Card</button>
    </div>
   );
}

List.propTypes = {
  list: PropTypes.array,
  addCard: PropTypes.func,
}

export default List;