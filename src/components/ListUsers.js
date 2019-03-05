import React from 'react';

import UserItem from './UserItem';

const ListUsers = ({data}) => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {data.map(user => <UserItem infoUser={user} key={user.id}/>)}
      </div>
    </div>
  )
}

export default ListUsers;