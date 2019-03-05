import React from 'react';

import CardItem from './CardItem';

const ListCards = ({data}) => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {data.map(item => <CardItem infoItem={item} key={item.id}/>)}
      </div>
    </div>
  )
}

export default ListCards;