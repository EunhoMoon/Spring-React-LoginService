import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import WriteForm from '../../components/WriteForm';

const BoardUpdate = (props) => {
  const { boardData, pNum } = useLocation().state;
  console.log('pnum', pNum);
  console.log('boardData', boardData);

  const [title, setTitle] = useState(boardData.title);
  const [content, setContent] = useState();

  const [board, setBoard] = useState({
    title: '',
    content: '',
  });

  const changeValue = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  useEffect(() => {
    setBoard({
      ...board,
      title: title,
      content: content,
    });
  }, [title, content]);

  const submitUpdate = (e) => {
    e.preventDefault();
    fetch('http://localhost:9595/board/update/' + boardData.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(board),
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        if (res == 1) {
          alert('게시글 수정에 성공하였습니다.');
          props.history.push('/board/list/1');
        } else {
          alert('게시글 수정에 실패하였습니다.');
        }
      });
  };

  return (
    <div>
      <div className="container mt-4">
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="title"
              defaultValue={boardData.title}
              onChange={changeValue}
            />
          </Form.Group>
          <WriteForm
            setContent={setContent}
            content={boardData.content}
            className="mb-0"
          />
          <div className="d-flex flex-row-reverse mt-0">
            <Link
              to={{
                pathname: '/board/detail/' + boardData.id,
                state: { pNum },
              }}
              className="btn btn-secondary"
            >
              취소
            </Link>
            &nbsp;
            <Button
              type="submit"
              className="btn btn-secondary"
              onClick={submitUpdate}
            >
              글 수정
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BoardUpdate;
