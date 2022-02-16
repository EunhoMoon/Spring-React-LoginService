import React from 'react';
import { Button } from 'react-bootstrap';

const Logout = (props) => {
  return (
    <div>
      <h1>로그아웃 되었습니다.</h1>
      <Button
        variant="primary"
        type="button"
        onClick={() => {
          sessionStorage.clear();
          window.location.replace('/');
        }}
        className="m-1"
      >
        메인으로
      </Button>
    </div>
  );
};

export default Logout;
