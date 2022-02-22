import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyInfo = () => {
  const id = sessionStorage.getItem('id');
  const [posts, setPosts] = useState({ id: '', title: '', writeDate: '' });
  const pNum = 1;

  const [user, setUser] = useState({
    id: '',
    username: '',
    name: '',
    email: '',
    role: '',
    createDate: '',
    lastLogin: '',
  });

  useEffect(() => {
    fetch('http://localhost:9595/user/id/' + id, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });

    fetch('http://localhost:9595/board/post/' + id, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  }, []);
  return (
    <div className="w-75 p-2 container">
      <div className="d-flex flex-row-reverse mb-1">
        <Link to={'/user/updatePass'} className="btn btn-secondary mb-1">
          비밀번호 변경
        </Link>
        &nbsp;
        <Link to={'/user/updateForm'} className="btn btn-secondary mb-1">
          정보 수정
        </Link>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <td>{user.username}</td>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              {user.email != null && user.email !== '' ? user.email : '-'}
            </td>
            <th>Join</th>
            <td>{user.createDate.substr(0, 10)}</td>
          </tr>
        </thead>
        <tbody>
          <tr align="center">
            <th colSpan={3}>Post</th>
            <th>Post Date</th>
          </tr>
          {posts.length > 0
            ? posts.map((post) => (
                <tr key={post.id}>
                  <td colSpan={3}>
                    {' '}
                    <Link
                      to={{
                        pathname: '/board/detail/' + id,
                        state: { pNum },
                      }}
                      className="linkText"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td align="center">{post.writeDate.substr(0, 10)}</td>
                </tr>
              ))
            : ''}
        </tbody>
      </Table>
    </div>
  );
};

export default MyInfo;
