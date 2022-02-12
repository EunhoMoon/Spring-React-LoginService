import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Join from './pages/user/Join';

function App() {
  return (
    <div>
      <Header />
      <Route path={'/'} exact={true} component={Home} />
      <Route path={'/join'} exact={true} component={Join} />
    </div>
  );
}

export default App;
