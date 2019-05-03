import React from 'react';
import PropTypes from 'prop-types';

const Card = ({card, updateCard, cardId, listId, move}) => {
  return ( 
    <div className={'card'} onClick={e => updateCard('update', listId, cardId, card, e)}>
      <div>{card.title}</div>
      <div>
        {card.people.map((person, i) => {
          return <div key={i}>{person}</div>
        })}
      </div>
      <div>Like A Boss!</div>
      <div className={'cardButtonDiv'}>
        <button onClick={e => move(cardId, listId, 1)}>Down</button>
        <button onClick={e => move(cardId, listId, -1)}>Up</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    people: PropTypes.array,
  }),
  updateCard: PropTypes.func,
  cardId: PropTypes.number,
  listId: PropTypes.number,
  move: PropTypes.func,
}
 
export default Card;