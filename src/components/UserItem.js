import React from 'react';
import Card from 'react-bootstrap/Card';

const UserItem = ({ infoUser }) => {
  const { name, username, email, phone, company: { name: companyName } } = infoUser;
  return (
    <div className="col-lg-3 col-md-4 pt-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://ih0.redbubble.net/image.587118940.8683/ap,550x550,16x12,1,transparent,t.u5.png"
        />
        <Card.Body>
          <Card.Title>{username}</Card.Title>
          <Card.Text>Name: {name}</Card.Text>
          <Card.Text>Email: {email}</Card.Text>
          <Card.Text>Phone: {phone}</Card.Text>
          <Card.Text>Company: {companyName}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserItem;