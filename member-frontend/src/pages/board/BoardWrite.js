import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import WriteForm from '../../components/WriteForm';

const BoardWrite = (props) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const [isTitleEmpty, setIsTitleEmpty] = useState(true);
  const [isContentEmpty, setIsContentEmpty] = useState(true);

  const [board, setBoard] = useState({
    title: '',
    writer: sessionStorage.getItem('id'),
    content: '',
  });

  const changeValue = (e) => {
    setTitle(e.target.value);
    setIsTitleEmpty(false);
  };

  useEffect(() => {
    setBoard({
      ...board,
      title: title,
      content: content,
    });
  }, [title, content]);

  const submitWrite = (e) => {
    e.preventDefault();
    if (isTitleEmpty) {
      alert('제목을 입력하세요.');
    } else {
      fetch('http://localhost:9595/board/write', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(board),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
          if (res == 1) {
            alert('게시글 작성에 성공하였습니다.');
            props.history.push('/board/list/1');
          } else {
            alert('게시글 작성에 실패하였습니다. 내용을 확인하세요.');
          }
        });
    }
  };

  return (
    <div className="container mt-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="title"
            placeholder="제목을 입력하세요."
            onChange={changeValue}
          />
        </Form.Group>
        <WriteForm
          setContent={setContent}
          setIsContentEmpty={setIsContentEmpty}
          content={''}
          className="mb-0"
        />
        <div className="d-flex flex-row-reverse mt-0">
          <Button
            type="submit"
            className="btn btn-secondary"
            onClick={submitWrite}
          >
            글 등록
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BoardWrite;
