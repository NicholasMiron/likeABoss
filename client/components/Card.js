import React from 'react';
import PropTypes from 'prop-types';

const Card = ({card, updateCard, key, listId}) => {
  return ( 
    <div className={'card'} onClick={() => updateCard('update', listId, key, card)}>
      <div>{card.description}</div>
      <div>{card.person}</div>
      <div>Like A Boss!</div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    description: PropTypes.string,
    person: PropTypes.string,
  }),
  updateCard: PropTypes.func,
  key: PropTypes.number,
  listId: PropTypes.number,
}
 
export default Card;