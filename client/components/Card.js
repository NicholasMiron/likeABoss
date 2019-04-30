import React from 'react';
import PropTypes from 'prop-types';

const Card = ({card}) => {
  return ( 
    <div className={'card'}>
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
}
 
export default Card;