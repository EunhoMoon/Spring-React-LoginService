import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';

const BoardChart = ({ result }) => {
  const [boardData, setBoardData] = useState([]);
  const [boardData2, setBoardData2] = useState([]);
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9595/chart/boardAndReply', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setBoardData(res.map((data) => data.data));
        setBoardData2(res.map((data) => data.data2));
        setNameList(res.map((data) => data.name));
      });
  }, []);

  const state = {
    series: [
      {
        name: '게시글 수',
        data: boardData,
      },
      {
        name: '댓글 수',
        data: boardData2,
      },
    ],

    options: {
      chart: {
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      grid: {
        row: {
          colors: ['#f3f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: nameList,
      },
    },
  };
  return (
    <div style={{ padding: 30 }}>
      <ApexCharts
        options={state.options}
        series={state.series}
        type="line"
        width={'100%'}
        height={300}
      />
    </div>
  );
};

export default BoardChart;
