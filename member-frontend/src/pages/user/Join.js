import React, { useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Join = (props) => {
  const [user, setuser] = useState({
    username: '',
    name: '',
    password: '',
    email: '',
  });

  const [email, setEmail] = useState({
    e1: '',
    e2: '',
  });

  const changeValue = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log('i : ' + user.username);
  };

  const chekId = (e) => {
    console.log(user.username);
    fetch('http://localhost:9595/user/name/' + user.username)
      .then((res) => res.json())
      .then((res) => {
        if (res.username === user.username) {
          alert('현재 사용중인 아이디 입니다.');
        } else {
          alert('사용 가능한 아이디 입니다.');
        }
      });
  };

  useEffect(() => {
    setuser({
      ...user,
      email: email.e1 + email.e2,
    });
  }, [email.e1, email.e2, user.email]);

  const mailValue = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });

    setuser({
      ...user,
      email: email.e1 + email.e2,
    });
  };

  const submitJoin = (e) => {
    e.preventDefault();
    fetch('http://localhost:9595/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'success') {
          alert('회원 가입에 성공하였습니다.');
          props.history.push('/login');
        } else {
          alert('회원 가입에 실패하였습니다.');
        }
      });
  };

  return (
    <div className="container">
      <Form onSubmit={submitJoin}>
        <Form.Group className="mb-3 mt-3 col-xs-4">
          <label>ID</label>
          <div className="input-group mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="ID를 입력하세요."
              name="username"
              onChange={changeValue}
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
              onClick={chekId}
            >
              중복확인
            </button>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={changeValue}
            placeholder="비밀번호를 입력하세요."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="text">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={changeValue}
            placeholder="이름을 입력하세요."
          />
        </Form.Group>

        <Row>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="e1"
              onChange={mailValue}
              placeholder="이메일을 입력하세요."
            />
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Domain</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Select size="sm" name="e2" onChange={mailValue}>
                <option value={''}>도메인을 선택하세요.</option>
                <option value={'@naver.com'}>naver.com</option>
                <option value={'@google.com'}>google.com</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <br />

        <Button variant="primary" type="submit" className="mr-1">
          회원가입
        </Button>
        <Link to={'/join'} type="submit" className="btn btn-primary m-1">
          뒤로가기
        </Link>
      </Form>
    </div>
  );
};

export default Join;
