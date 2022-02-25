import React from 'react';
import { Card } from 'react-bootstrap';

const MemberChartResult = ({ datas }) => {
  return (
    <Card border="light" style={{ width: '45%' }}>
      <Card.Header>회원 통계</Card.Header>
      <Card.Body style={{ textAlign: 'right' }}>
        <Card.Text>
          총 회원 수 : {datas.data + datas.data2 + datas.data3} 명
        </Card.Text>
        <Card.Text>게시판 이용 회원 수 : {datas.data} 명</Card.Text>
        <Card.Text>로그인 이용 회원 수 : {datas.data2} 명</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MemberChartResult;
