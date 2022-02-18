import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BoardItem from '../../components/BoardItem';
import Page from '../../components/Page';

const BoardList = (props) => {
  const pNum = props.match.params.pNum; // 현재 페이지 번호
  const [totalPage, setTotalPage] = useState(); // 총 페이지 수
  const [boards, setBoards] = useState([]);
  const link = '/board/list/';
  const [k, setK] = useState('');
  const [keyword, setKeyword] = useState('');

  const setKey = (e) => {
    setK(e.target.value);
  };

  const search = () => {
    console.log('k', k);
    setKeyword(k);
    console.log('keyword', keyword);
  };

  useEffect(() => {
    fetch('http://localhost:9595' + link + pNum + '?keyword=' + keyword, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setBoards(res);
      });

    fetch('http://localhost:9595/board/all?keyword=' + keyword, {
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
  }, [pNum, keyword]);

  return (
    <div className="container mt-2">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th width="10%">no</th>
            <th width="40%">Title</th>
            <th width="17%">Writer</th>
            <th width="*">Upload Date</th>
            <th width="13%">Views</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board) => (
            <BoardItem board={board} pNum={pNum} key={board.id} />
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between">
        <div></div>
        <div className="d-flex justify-content-evenly ms-5">
          <InputGroup className="mb-3">
            <FormControl placeholder="검색어를 입력하세요." onChange={setKey} />
            <Button variant="outline-secondary" onClick={search}>
              검색
            </Button>
          </InputGroup>
        </div>
        <div>
          <Link to={'/board/write'} className="btn btn-secondary mb-1">
            글쓰기
          </Link>
        </div>
      </div>
      <Page pNum={pNum} totalPage={totalPage} link={link} />
    </div>
  );
};

export default BoardList;
