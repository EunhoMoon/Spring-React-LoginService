import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UserItem from '../../components/UserItem';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9595/user/all', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>no</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Join Date</th>
            <th>Last Login</th>
            <th>more</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
