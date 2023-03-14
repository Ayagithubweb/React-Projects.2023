import React from 'react'
import { Button, Card } from 'react-bootstrap'

function CardItem(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.ele.image} />
      <Card.Body className='align-start'>
        <Card.Title>{props.ele.name}</Card.Title>
        <Card.Text>
          {props.ele.description}
        </Card.Text>
        <Button variant="primary">Add to card</Button>
      </Card.Body>
    </Card>
  )
}

export default CardItem
