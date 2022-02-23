import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const ReplyInsert = ({ boardId }) => {
  const [reply, setReply] = useState({
    writer: sessionStorage.getItem('id'),
    board: boardId,
    content: '',
  });
  const [replyContent, setReplyContent] = useState();

  useEffect(() => {
    setReply({
      ...reply,
      board: boardId,
      content: replyContent,
    });
    console.log('reply', reply);
  }, [replyContent]);

  const insertReply = () => {
    fetch('http://localhost:9595/reply/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(reply),
    })
      .then((res) => res.text())
      .then((res) => {
        console.log('res', res.value);
        if (res == 1) {
          alert('게시글 등록에 성공하였습니다.');
          window.location.replace('/board/detail/' + boardId);
        } else {
          alert('게시글 등록에 실패하였습니다.');
        }
      });
  };

  return (
    <div>
      <Row>
        <Col xs={13} md={10}>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Comments"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              className=" fixsize"
              placeholder="Leave a comment here"
              onChange={(e) => {
                setReplyContent(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
        <Col xs={13} md={2}>
          <button
            type="button"
            className="hbutton btn btn-outline-secondary"
            onClick={insertReply}
          >
            댓글 등록
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ReplyInsert;
