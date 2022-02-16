import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import UserDetail from './pages/board/UserDetail';
import UserList from './pages/board/UserList';
import Home from './pages/Home';
import Join from './pages/user/Join';
import Login from './pages/user/Login';
import Success from './pages/user/Success';

function App() {
  return (
    <div>
      <Header />
      <Route path={'/'} exact={true} component={Home} />
      <Route path={'/join'} exact={true} component={Join} />
      <Route path={'/login'} exact={true} component={Login} />
      <Route path={'/user/list'} exact={true} component={UserList} />
      <Route path={'/user/detail/:id'} exact={true} component={UserDetail} />
      <Route path={'/success'} exact={true} component={Success} />
    </div>
  );
}

export default App;
