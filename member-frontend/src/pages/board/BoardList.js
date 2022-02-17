import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BoardItem from '../../components/BoardItem';
import Page from '../../components/Page';

const BoardList = (props) => {
  const pNum = props.match.params.pNum; // 현재 페이지 번호
  const [totalPage, setTotalPage] = useState(); // 총 페이지 수
  const [boards, setBoards] = useState([]);
  const link = '/board/list/';

  useEffect(() => {
    fetch('http://localhost:9595/board/list/' + pNum, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setBoards(res);
      });

    fetch('http://localhost:9595/board/all', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setTotalPage(
          res.length > 10 && res.length % 10 > 0
            ? parseInt(res.length / 10) + 1
            : parseInt(res.length / 10),
        );
      });
  }, [pNum, boards, Link]);

  return (
    <div className="container mt-2">
      <div className="d-flex flex-row-reverse">
        <Link to={'/board/write'} className="btn btn-secondary mb-1">
          글쓰기
        </Link>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th width="10%">no</th>
            <th width="40%">Title</th>
            <th width="20%">Writer</th>
            <th width="*">Upload Date</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board) => (
            <BoardItem board={board} pNum={pNum} key={board.id} />
          ))}
        </tbody>
      </Table>

      <Page pNum={pNum} totalPage={totalPage} link={link} />
    </div>
  );
};

export default BoardList;
