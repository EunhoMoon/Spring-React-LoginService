import React from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3 col-xs-4">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="아이디를 입력하세요." />
          <Link className="m-3 btn btn-outline-primary">중복확인</Link>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요." />
        </Form.Group>

        <Row>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="이메일을 입력하세요" />
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Select>
                <option>도메인을 선택하세요.</option>
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
