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

  const [isDup, setIsDup] = useState(true);
  const [checkPassword, setCheckPassword] = useState(false);

  const changeValue = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const checkPasswordValue = (e) => {
    if (e.target.value == user.password) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };

  // 아이디 중복 검사
  const chekId = (e) => {
    console.log(user.username);
    fetch('http://localhost:9595/user/name/' + user.username)
      .then((res) => res.json())
      .then((res) => {
        if (res.username === user.username) {
          alert('현재 사용중인 아이디 입니다.');
        } else {
          alert('사용 가능한 아이디 입니다.');
          setIsDup(false);
        }
      });
  };

  // 입력된 회원 정보 저장
  useEffect(() => {
    setuser({
      ...user,
      email: email.e1 + email.e2,
    });
  }, [email.e1, email.e2, user.email]);

  // 입력 받은 이메일 데이터 저장
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

  // 회원 가입 함수
  const submitJoin = (e) => {
    e.preventDefault();
    if (isDup || !checkPassword) {
      alert('입력된 정보를 확인하세요.');
    } else {
      fetch('http://localhost:9595/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
          if (res == 1) {
            alert('회원 가입에 성공하였습니다.');
            window.location.replace('/login');
          } else {
            alert('회원 가입에 실패하였습니다.');
          }
        });
    }
  };

  return (
    <div className="container">
      <Form onSubmit={submitJoin}>
        <Form.Group className="mb-1 mt-3 col-xs-4">
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
        <div className="mb-3 p-1">
          {!isDup ? (
            <span className="isY">사용 가능한 아이디입니다.</span>
          ) : (
            <span className="isN">아이디 중복검사를 해주세요.</span>
          )}
        </div>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={changeValue}
            placeholder="비밀번호를 입력하세요."
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            type="password"
            onChange={checkPasswordValue}
            placeholder="비밀번호를 다시 입력하세요."
          />
        </Form.Group>
        <div className="mb-3 p-1">
          {checkPassword ? (
            <span className="isY">비밀번호가 일치합니다.</span>
          ) : (
            <span className="isN">비밀번호가 일치하지 않습니다.</span>
          )}
        </div>

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
