import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Reply = ({ boardId }) => {
  const [replyDatas, setReplyDatas] = useState([]);
  const link = 'http://localhost:9595/reply/' + boardId;
  console.log('link', link);

  useEffect(() => {
    fetch(link, {
      method: 'GET',
    })
      .then((resList) => resList.json())
      .then((resList) => {
        setReplyDatas(resList);
      });
    console.log(replyDatas);
  }, [boardId]);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className=" position-relative mb-2"
    >
      {replyDatas.map((reply) => (
        <Card position="top-end" className="p-1 card" key={reply.id}>
          <Card.Header>
            <strong className="me-auto">{reply.username}</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small className="text-muted">{reply.writeDate}</small>
          </Card.Header>
          <Card.Body>{reply.content}</Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Reply;
