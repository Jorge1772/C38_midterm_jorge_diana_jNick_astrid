import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const Cards = ({ data }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.imgUrl} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.formatted_address}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          {data.opening_hours && data.opening_hours.open_now
            ? 'Open Now'
            : 'Closed Now'}
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default Cards;
