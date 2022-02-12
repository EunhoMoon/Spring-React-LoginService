import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="아이디를 입력하세요." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요." />
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

export default Home;
