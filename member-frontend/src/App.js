import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import UserDetail from './pages/board/UserDetail';
import UserList from './pages/board/UserList';
import Home from './pages/Home';
import Join from './pages/user/Join';
import Login from './pages/user/Login';
import './css/Page.css';
import BoardList from './pages/board/BoardList';
import BoardDetail from './pages/board/BoardDetail';
import Logout from './pages/user/Logout';
import BoardWrite from './pages/board/BoardWrite';
import BoardUpdate from './pages/board/BoardUpdate';
import MyInfo from './pages/user/MyInfo';
import UserUpdate from './pages/user/UserUpdate';
import UserUpdatePass from './pages/user/UserUpdatePass';
import NoAuthority from './components/NoAuthority';

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
      <Route
        path={'/user/list/:pNum'}
        exact={true}
        component={isAdmin ? UserList : NoAuthority}
      />
      <Route path={'/user/myInfo'} exact={true} component={MyInfo} />
      <Route path={'/user/updateForm'} exact={true} component={UserUpdate} />
      <Route
        path={'/user/updatePass'}
        exact={true}
        component={UserUpdatePass}
      />
      <Route
        path={'/user/detail/:id'}
        exact={true}
        component={isAdmin ? UserDetail : NoAuthority}
      />
      <Route path={'/board/list/:pNum'} exact={true} component={BoardList} />
      <Route path={'/board/write'} exact={true} component={BoardWrite} />
      <Route path={'/board/update'} exact={true} component={BoardUpdate} />
      <Route path={'/board/detail/:id'} exact={true} component={BoardDetail} />
    </div>
  );
}

export default App;
