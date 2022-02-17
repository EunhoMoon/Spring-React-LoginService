import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Page from '../../components/Page';
import UserItem from '../../components/UserItem';

const UserList = (props) => {
  const pNum = props.match.params.pNum; // 현재 페이지 번호
  const [totalPage, setTotalPage] = useState(); // 총 페이지 수
  const [users, setUsers] = useState([]);
  const link = '/user/list/';

  useEffect(() => {
    fetch('http://localhost:9595/user/list/' + pNum, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });

    fetch('http://localhost:9595/user/all', {
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
  }, [pNum]);

  return (
    <div className="container mt-2">
      <Table striped bordered hover variant="dark" className=" text-center">
        <thead>
          <tr>
            <th>no</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Join Date</th>
            <th>Last Login</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem user={user} pNum={pNum} key={user.id} />
          ))}
        </tbody>
      </Table>

      <Page pNum={pNum} totalPage={totalPage} link={link} />
    </div>
  );
};

export default UserList;
