import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import UserDetail from './pages/board/UserDetail';
import UserList from './pages/board/UserList';
import Home from './pages/Home';
import Join from './pages/user/Join';
import Login from './pages/user/Login';
import Success from './pages/user/Success';
import './css/Page.css';
import BoardList from './pages/board/BoardList';
import BoardDetail from './pages/board/BoardDetail';
import Logout from './pages/user/Logout';
import BoardWrite from './pages/board/BoardWrite';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f6e58d;
  }
`;

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('username') === null) {
    } else {
      setIsLogin(true);
      if (sessionStorage.getItem('role') === 'ADMIN') {
        setIsAdmin(true);
      }
    }
  }, []);

  return (
    <div className="all-body">
      <Header isLogin={isLogin} isAdmin={isAdmin} />
      <Route path={'/'} exact={true} component={Home} />
      <Route path={'/join'} exact={true} component={Join} />
      <Route path={'/login'} exact={true} component={Login} />
      <Route path={'/logout'} exact={true} component={Logout} />
      <Route path={'/user/list/:pNum'} exact={true} component={UserList} />
      <Route path={'/user/detail/:id'} exact={true} component={UserDetail} />
      <Route path={'/board/list/:pNum'} exact={true} component={BoardList} />
      <Route path={'/board/write'} exact={true} component={BoardWrite} />
      <Route path={'/board/detail/:id'} exact={true} component={BoardDetail} />
      <Route path={'/success'} exact={true} component={Success} />{' '}
    </div>
  );
}

export default App;
