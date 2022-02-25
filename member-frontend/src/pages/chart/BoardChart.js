import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';

const BoardChart = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9595/chart/boardAndReply', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.map((data) => data.data));
        setData2(res.map((data) => data.data2));
        setNameList(res.map((data) => data.name));
      });
  }, []);

  const state = {
    series: [
      {
        name: '게시글 수',
        data: data,
      },
      {
        name: '댓글 수',
        data: data2,
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
      title: {
        text: '게시글 작성 및 댓글 작성 현황',
        align: 'left',
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
