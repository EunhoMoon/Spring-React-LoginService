import React, { useState } from 'react';

const Home = (props) => {
  console.log(sessionStorage.getItem('username'));
  return (
    <div className="container">
      <h1>메인화면</h1>
    </div>
  );
};

export default Home;
