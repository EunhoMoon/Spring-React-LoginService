import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import BoardChart from '../chart/BoardChart';
import JoinChart from '../chart/JoinChart';

const Static = () => {
  return (
    <Container className="mt-4">
      <Tabs defaultActiveKey="static1" className="mb-3">
        <Tab eventKey="static1" title="회원 가입 현황">
          <JoinChart />
        </Tab>
        <Tab eventKey="static2" title="게시글 현황">
          <BoardChart />
        </Tab>
        <Tab eventKey="static3" title="Contact" disabled>
          <h1>통계 3</h1>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Static;
