import React, { useEffect, useState } from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import MemberChartPie from './MemberChartPie';
import MemberChartResult from './MemberChartResult';

const MemberChart = () => {
  const [datas, setDatas] = useState({
    name: '',
    data: '',
    data2: '',
    data3: '',
  });

  useEffect(() => {
    fetch('http://localhost:9595/chart/getMemberCount', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setDatas(res);
      });
  }, []);

  return (
    <Tabs defaultActiveKey="static1">
      <Tab
        eventKey="static1"
        title="이용 현황"
        style={{ border: '1px solid lightgrey', borderTop: 'none' }}
        disabled
      >
        <div className="d-flex justify-content-around p-4">
          <MemberChartPie datas={datas} />
          <Card border="light" style={{ width: '45%' }}>
            <Card.Header>회원 통계</Card.Header>
            <Card.Body style={{ textAlign: 'right' }}>
              <Card.Text style={{ fontSize: 14 }}>
                총 회원 수 : {datas.data + datas.data2 + datas.data3} 명
              </Card.Text>
              <Card.Text style={{ fontSize: 14 }}>
                게시판 이용 회원 수 : {datas.data} 명
              </Card.Text>
              <Card.Text style={{ fontSize: 14 }}>
                로그인 이용 회원 수 : {datas.data2} 명
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Tab>
    </Tabs>
  );
};

export default MemberChart;
