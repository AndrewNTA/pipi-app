import React from 'react';
import Card from 'react-bootstrap/Card';

const CardItem = ({ infoItem }) => {
  const { title, body, userId } = infoItem;
  return (
    <div className="col-lg-3 col-md-4 pt-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemThHwMf6iR7NHNWvricXdmYEfIBjB1PibljTeikSdI0g69ZANg"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated by user {userId}</small>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default CardItem;