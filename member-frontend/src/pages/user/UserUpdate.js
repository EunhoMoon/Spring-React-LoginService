import React, { useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserUpdate = (props) => {
  const [user, setUser] = useState({
    username: '',
    name: '',
    password: '',
    email: '',
  });

  const [password, setPassword] = useState();
  const [email, setEmail] = useState({ e1: '', e2: '' });

  useEffect(() => {
    fetch('http://localhost:9595/user/id/' + sessionStorage.getItem('id'), {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.email !== null) {
          setUser(res);
        } else {
          setUser({
            ...res,
            email: ' @ ',
          });
        }
        console.log(res);
      });
  }, []);

  useEffect(() => {
    if (user.email !== null || user.email !== '') {
      let emails = user.email.split('@');
      setEmail({ e1: emails[0], e2: emails[1] });
    }
  }, [user.id]);

  const mailValue = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };

  const checkValue = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setUser({
      ...user,
      email: email.e1 + '@' + email.e2,
    });
    console.log('email', email.e1 + '@' + email.e2);
  }, [email]);

  const submitUpdate = (e) => {
    e.preventDefault();
    if (password === user.password) {
      fetch('http://localhost:9595/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.text())
        .then((res) => {
          if (res == 1) {
            alert('정보 수정에 성공하였습니다.');
            window.location.replace('/user/myInfo');
          } else {
            alert('정보 수정에 실패하였습니다.');
          }
        });
    }
  };

  return (
    <div className="container mt-2">
      <Form onSubmit={submitUpdate}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder={user.username}
            readOnly="readOnly"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="text">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder={user.name}
            readOnly="readOnly"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="e1"
              defaultValue={email.e1 !== ' ' ? email.e1 : ''}
              placeholder={'이메일을 입력하세요.'}
              onChange={mailValue}
            />
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Domain</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Select
                size="sm"
                name="e2"
                value={email.e2}
                onChange={mailValue}
              >
                <option value={''}>도메인을 선택하세요.</option>
                <option value="naver.com">naver.com</option>
                <option value="google.com">google.com</option>
              </Form.Select>
            </InputGroup>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            autoComplete="off"
            onChange={checkValue}
          />
        </Form.Group>
        <div className="mt-3">
          <Button variant="primary" type="submit" className="m-1">
            수정
          </Button>
          <Link to={'/user/myInfo'} className="btn btn-primary m-1">
            취소
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default UserUpdate;
