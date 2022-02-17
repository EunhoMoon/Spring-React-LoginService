import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BoardDetail = (props) => {
  const id = props.match.params.id; // 현재 페이지 번호
  const pNum = useLocation().state.pNum; // location을 사용하기 위해 선언

  const [board, setBoard] = useState({
    id: '',
    username: '',
    title: '',
    content: '',
    writeDate: '',
  });

  useEffect(() => {
    fetch('http://localhost:9595/board/detail/' + id, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setBoard(res);
      });
  }, []);

  return (
    <div>
      <h1>{board.title}</h1>
      <h3>{board.username}</h3>
      <h3>
        {board.writeDate.substring(0, 10) +
          ' ' +
          board.writeDate.substring(11, 16)}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: board.content }}></div>
    </div>
  );
};

export default BoardDetail;
