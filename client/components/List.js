import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = ({list}) => {
  return ( 
    <div className={'list'}>
      {list.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
   );
}

List.propTypes = {
  list: PropTypes.array,
}

export default List;