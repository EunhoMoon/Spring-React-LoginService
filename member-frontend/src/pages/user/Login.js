import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [user, setuser] = useState({
    username: '',
    password: '',
  });

  const changeValue = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:9595/loginProc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res != null) {
          alert(res.name + '님 환영합니다');
          sessionStorage.setItem('username', res.username);
          sessionStorage.setItem('id', res.id);
          sessionStorage.setItem('role', res.role);
          window.location.replace('/');
        } else {
          alert('로그인 실패. 아이디와 비밀번호를 확인하세요.');
        }
      });
  };

  return (
    <div className="container">
      <br />
      <Form onSubmit={submitLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="아이디를 입력하세요."
            onChange={changeValue}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            autoComplete="on"
            onChange={changeValue}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="m-1">
          Login
        </Button>
        <Link to={'/join'} type="submit" className="btn btn-primary m-1">
          Join
        </Link>

        {/* Open Api Login */}
        <Button variant="primary" type="submit" className="m-1">
          카카오 로그인
        </Button>
        <Button variant="primary" type="submit" className="m-1">
          구글 로그인
        </Button>
      </Form>
    </div>
  );
};

export default Login;
