import React from 'react';
import PropTypes from 'prop-types';

const Card = ({card, updateCard, cardId, listId}) => {
  return ( 
    <div className={'card'} onClick={() => updateCard('update', listId, cardId, card)}>
      <div>{card.description}</div>
      <div>
        {card.people.map((person, i) => {
          return <div key={i}>{person}</div>
        })}
      </div>
      <div>Like A Boss!</div>
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
}
 
export default Card;