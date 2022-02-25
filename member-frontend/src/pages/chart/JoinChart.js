import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const JoinChart = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9595/chart/memberJoin', {
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
        name: '전주 가입자',
        data: data,
      },
      {
        name: '금주 가입자',
        data: data2,
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 300,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: nameList,
      },

      fill: {
        opacity: 1,
      },
    },
  };
  return (
    <div style={{ padding: 30 }}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default JoinChart;
