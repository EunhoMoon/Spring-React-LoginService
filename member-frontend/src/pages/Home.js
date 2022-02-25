import BestBoard from './chart/BestBoard';
import BestReply from './chart/BestReply';

const Home = (props) => {
  return (
    <div className="container p-3">
      {/* <Banner /> 
      
      <br />*/}
      <p style={{ marginLeft: '1px', marginBottom: '-2px' }}>
        <strong>주간 조회수 BEST</strong>
      </p>
      <hr />
      <BestBoard />
      <br />
      <p style={{ marginLeft: '1px', marginBottom: '-2px' }}>
        <strong>주간 댓글 BEST</strong>
      </p>
      <hr />
      <BestReply />
      <hr />
    </div>
  );
};

export default Home;
