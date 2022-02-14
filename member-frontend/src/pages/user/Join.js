import React from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3 mt-3 col-xs-4">
          <label>ID</label>
          <div class="input-group mt-2">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-primary"
              type="button"
              id="button-addon2"
            >
              중복확인
            </button>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요." />
        </Form.Group>

        <Row>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="이메일을 입력하세요" />
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Domain</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Select size="sm">
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
