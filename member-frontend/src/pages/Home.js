import { Tab, Tabs } from 'react-bootstrap';
import Banner from './Banner';
import BestBoard from './chart/BestBoard';
import Chart from './chart/Chart';

const Home = (props) => {
  return (
    <div className="container p-3">
      <Banner />
      <br />
      <p style={{ marginLeft: '1px', marginBottom: '-2px' }}>
        <strong>주간 조회수 BEST</strong>
      </p>
      <hr />
      <BestBoard />
      <hr />

      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Chart />
        </Tab>
        <Tab eventKey="profile" title="Profile"></Tab>
        <Tab eventKey="contact" title="Contact" disabled></Tab>
      </Tabs>
    </div>
  );
};

export default Home;
