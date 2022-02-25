import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MemberChartPie = ({ datas }) => {
  const state = {
    series: [datas.data, datas.data2, datas.data3],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['게시판 이용 회원', '로그인 이용 회원', '가입 회원'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="pie"
      width={350}
    />
  );
};

export default MemberChartPie;
