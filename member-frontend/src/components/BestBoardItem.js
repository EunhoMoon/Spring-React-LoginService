import React from 'react';
import { Card } from 'react-bootstrap';
import bestIcon from '../images/top-rated.png';

const BestBoardItem = ({ board }) => {
  return (
    <Card style={{ width: '20rem', padding: '1px' }}>
      <Card.Body>
        <Card.Title className="mb-3">
          <strong>{board.title}</strong>
          <span style={{ float: 'right' }}>
            <img
              src={bestIcon}
              width="35"
              height="35"
              className="mb-1"
              alt="BEST"
            />
          </span>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {board.writeDate.substring(0, 10) +
            ' ' +
            board.writeDate.substring(11, 16)}
        </Card.Subtitle>
        <Card.Text
          style={{ height: '50px' }}
          dangerouslySetInnerHTML={{ __html: board.content }}
        ></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BestBoardItem;
