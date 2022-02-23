import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Reply = ({ boardId }) => {
  const [replyDatas, setReplyDatas] = useState([]);
  const link = 'http://localhost:9595/reply/' + boardId;

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

  const deleteReply = (e) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      fetch('http://localhost:9595/reply/delete/' + e.target.value, {
        method: 'DELETE',
      })
        .then((delRes) => delRes.text())
        .then((delRes) => {
          if (delRes == 1) {
            alert('댓글이 삭제되었습니다.');
            window.location.replace('/board/detail/' + boardId);
          } else {
            alert('삭제에 실패하였습니다.');
          }
        });
    } else {
    }
  };

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className=" position-relative mb-2"
    >
      {replyDatas.map((reply) => (
        <Card position="top-end" className="p-1 card" key={reply.id}>
          <Card.Header>
            <Row>
              <Col md={2}>
                <strong className="me-auto">{reply.username}</strong>
              </Col>
              <Col md={8}>
                <small className="text-muted">{reply.writeDate}</small>
              </Col>
              <Col md={2}>
                <div style={{ float: 'right' }}>
                  {sessionStorage.getItem('username') == reply.username ? (
                    <Button
                      variant="outline-danger"
                      size="sm"
                      value={reply.id}
                      onClick={deleteReply}
                    >
                      삭제
                    </Button>
                  ) : (
                    ''
                  )}
                </div>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>{reply.content}</Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Reply;
