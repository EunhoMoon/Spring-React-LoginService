import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserUpdatePass = () => {
  const [oldPass, setOldPass] = useState();
  const [newPass, setNewPass] = useState();
  const [checkPass, setCheckPass] = useState(false);

  const setOldPassword = (e) => {
    setOldPass(e.target.value);
  };

  const setNewPassword = (e) => {
    setNewPass(e.target.value);
  };

  const checkPassword = (e) => {
    if (e.target.value === newPass) {
      setCheckPass(true);
    } else {
      setCheckPass(false);
    }
  };

  const submitUpdate = (e) => {
    e.preventDefault();
    fetch('http://localhost:9595/user/isMem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        username: sessionStorage.getItem('username'),
        password: oldPass,
      }),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res == 1) {
          if (checkPass) {
            fetch('http://localhost:9595/user/updatePassword', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
              body: JSON.stringify({
                id: sessionStorage.getItem('id'),
                password: newPass,
              }),
            })
              .then((result) => result.text())
              .then((result) => {
                if (result == 1) {
                  alert('비밀번호가 변경되었습니다.');
                  window.location.replace('/user/myInfo');
                } else {
                  alert('비밀번호 변경에 실패하였습니다.');
                }
              });
          } else {
            alert('비밀번호 확인 값이 다릅니다.');
          }
        } else {
          alert('기존 비밀번호를 확인하세요.');
        }
      });
  };

  return (
    <div className="container mt-2">
      <h1>비밀번호 변경</h1>
      <Form onSubmit={submitUpdate}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="oldPass"
            placeholder="기존 비밀번호를 입력하세요."
            autoComplete="off"
            onChange={setOldPassword}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="newPass"
            onChange={setNewPassword}
            autoComplete="off"
            placeholder="비밀번호를 입력하세요."
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            type="password"
            onChange={checkPassword}
            autoComplete="off"
            placeholder="비밀번호를 다시 입력하세요."
          />
        </Form.Group>
        <div className="mb-3 p-1">
          {checkPass ? (
            <span className="isY">비밀번호가 일치합니다.</span>
          ) : (
            <span className="isN">비밀번호가 일치하지 않습니다.</span>
          )}
        </div>
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

export default UserUpdatePass;
