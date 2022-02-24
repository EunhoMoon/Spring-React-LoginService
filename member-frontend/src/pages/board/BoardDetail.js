import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Reply from '../../components/Reply';
import ReplyInsert from '../../components/ReplyInsert';

const BoardDetail = (props) => {
  const id = props.match.params.id; // 현재 페이지 번호
  const pNum = useLocation().state.pNum; // location을 사용하기 위해 선언
  const keyword = useLocation().state.keyword;

  const [boardData, setBoardData] = useState({
    id: '',
    username: '',
    title: '',
    content: '',
    writer: '',
    writeDate: '',
    readCnt: 0,
  });

  const onRemove = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      fetch('http://localhost:9595/board/delete/' + boardData.id, {
        method: 'DELETE',
      })
        .then((res) => res.text())
        .then((res) => {
          if (res == 1) {
            alert('게시글이 삭제되었습니다.');
            props.history.push('/board/list/1');
          } else {
            alert('삭제 실패. 잠시 후에 다시 시도하세요.');
          }
        });
    }
  };

  useEffect(() => {
    fetch('http://localhost:9595/board/detail/' + id, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setBoardData(res);
      });
  }, []);

  return (
    <div className="container mt-2">
      <div className="d-flex flex-row-reverse">
        <Link
          to={'/board/list/' + pNum}
          keyword={keyword}
          className="btn btn-secondary mb-1"
        >
          목록으로
        </Link>
        &nbsp;
        {sessionStorage.getItem('username') == boardData.username ? (
          <Button onClick={onRemove} className="btn btn-secondary mb-1">
            글 삭제
          </Button>
        ) : (
          ''
        )}
        &nbsp;
        {sessionStorage.getItem('username') == boardData.username ? (
          <Link
            to={{
              pathname: '/board/update/',
              state: { boardData, pNum },
            }}
            className="btn btn-secondary mb-1"
          >
            글 수정
          </Link>
        ) : (
          ''
        )}
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr className=" text-center">
            <th>제목</th>
            <td colSpan={2}>{boardData.title}</td>
            <td width={'15%'}>조회수</td>
            <td width={'15%'}>{boardData.readCnt}</td>
          </tr>
          <tr className=" text-center">
            <th width="20%">작성자</th>
            <td width="30%">
              {sessionStorage.getItem('role') == 'ADMIN' ? (
                <Link
                  to={{
                    pathname: '/user/detail/' + boardData.writer,
                    state: { pNum },
                  }}
                  className="linkText"
                >
                  {boardData.username}
                </Link>
              ) : (
                boardData.username
              )}
            </td>
            <th width="20%">작성일</th>
            <td colSpan={3}>
              {boardData.writeDate.substring(0, 10) +
                ' ' +
                boardData.writeDate.substring(11, 16)}
            </td>
          </tr>
        </thead>
        <thead>
          <tr className=" text-center">
            <th colSpan={6}>내용</th>
          </tr>
          <tr>
            <td
              className="p-5"
              colSpan={6}
              dangerouslySetInnerHTML={{ __html: boardData.content }}
            ></td>
          </tr>
        </thead>
      </Table>
      <ReplyInsert boardId={id} />
      <Reply boardId={id} />
    </div>
  );
};

export default BoardDetail;
