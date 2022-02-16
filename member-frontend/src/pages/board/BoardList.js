import React from 'react';
import { Table } from 'react-bootstrap';
import Page from '../../components/Page';

const BoardList = () => {
  const pNum = 1;
  const totalPage = 1;

  return (
    <div className="container mt-2">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th width="10%">no</th>
            <th width="40%">Title</th>
            <th width="20%">Writer</th>
            <th width="*">Upload Date</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user) => (
            <UserItem user={user} pNum={pNum} key={user.id} />
          ))} */}
        </tbody>
      </Table>

      <Page pNum={pNum} totalPage={totalPage} />
    </div>
  );
};

export default BoardList;
