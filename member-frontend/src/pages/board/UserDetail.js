import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // Link to 를 이용해 param을 받기 위해 사용
import UserPost from './UserPost';

const UserDetail = (props) => {
  const pNum = useLocation().state.pNum; // location을 사용하기 위해 선언
  const id = props.match.params.id;
  const [posts, setPosts] = useState({ id: '', title: '', writeDate: '' });
  // const pNum = location.state.pNum;

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
    <div className="w-75 p-3 container">
      <div className="d-flex flex-row-reverse">
        <Link to={'/user/list/' + pNum} className="btn btn-secondary mb-1">
          목록으로
        </Link>
      </div>
      <Table striped bordered hover variant="dark">
        <tbody>
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
            <th>Role</th>
            <td>{user.role === 'USER' ? 'User' : 'Admin'}</td>
          </tr>
          <tr>
            <th>Join</th>
            <td colSpan={3}>{user.createDate.substr(0, 10)}</td>
          </tr>
          <tr>
            <th>Last Login</th>
            <td colSpan={3}>
              {user.lastLogin != null
                ? user.lastLogin.substr(0, 10) +
                  ' ' +
                  user.lastLogin.substr(11, 5)
                : '-'}
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr align="center">
            <th colSpan={3}>Post</th>
            <th>Post Date</th>
          </tr>
          {posts.length > 0
            ? posts.map((post) => (
                <tr>
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

export default UserDetail;
