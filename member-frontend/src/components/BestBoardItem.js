import React from 'react';
import { Card } from 'react-bootstrap';
import medal_gold from '../images/medal_gold.png';
import medal_silver from '../images/medal_silver.png';

const BestBoardItem = ({ board }) => {
  return (
    <Card style={{ width: '45%', padding: '1px' }}>
      <Card.Body>
        <Card.Title className="mb-3">
          <strong>{board.title}</strong>
          <span style={{ float: 'right' }}>
            <img
              src={board.no === 1 ? medal_gold : medal_silver}
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
