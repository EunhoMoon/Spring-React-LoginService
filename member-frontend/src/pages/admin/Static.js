import React, { useEffect, useState } from 'react';
import { Card, Container, Tab, Tabs } from 'react-bootstrap';
import BoardChart from '../chart/BoardChart';
import JoinChart from '../chart/JoinChart';
import MemberChart from '../chart/MemberChart';

const Static = () => {
  return (
    <Container className="mt-4">
      <Tabs defaultActiveKey="static1">
        <Tab
          eventKey="static1"
          title="회원 가입 현황"
          style={{ border: '1px solid lightgrey', borderTop: 'none' }}
        >
          <JoinChart />
        </Tab>
        <Tab
          eventKey="static2"
          title="게시글 현황"
          style={{ border: '1px solid lightgrey', borderTop: 'none' }}
        >
          <BoardChart />
        </Tab>
        <Tab eventKey="static3" title="Contact" disabled>
          <h1>통계 3</h1>
        </Tab>
      </Tabs>
      <br />
      <MemberChart />
    </Container>
  );
};

export default Static;
