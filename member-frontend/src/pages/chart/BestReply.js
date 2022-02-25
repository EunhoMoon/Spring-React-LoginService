import React, { useEffect, useState } from 'react';
import BestBoardItem from '../../components/BestBoardItem';

const BestReply = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9595/chart/bestReply')
      .then((res) => res.json())
      .then((res) => {
        setBoards(res);
      });
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-around">
        {boards.map((board) => (
          <BestBoardItem board={board} key={board.id} />
        ))}
      </div>
    </div>
  );
};

export default BestReply;
