import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Join from './pages/user/Join';
import Success from './pages/user/Success';

function App() {
  return (
    <div>
      <Header />
      <Route path={'/'} exact={true} component={Home} />
      <Route path={'/join'} exact={true} component={Join} />
      <Route path={'/success'} exact={true} component={Success} />
    </div>
  );
}

export default App;
