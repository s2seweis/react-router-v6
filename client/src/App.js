import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from './pages/Admin';
import UserRoles from './pages/UserRoles';
import Settings from './pages/Settings';
import Start from './pages/Start';
import Products from './pages/Products';
import Login from './pages/Login';
// ###
import Overview from './pages/Overview';
import Register from './pages/Register';
import 'antd/dist/antd.min.css';
// ###
import PrivateRoutes from './utils/PrivateRoutes';
import PublicRoutes from './utils/PublicRoutes';
import React, {useState} from 'react';
// ###

import {useDispatch, useSelector} from 'react-redux';
// ###
import EditUser from './pages/EditUser';
// ###
import Animation from './pages/Animation';
// ###
import AddUser from './pages/AddUser';
// ###
import EditSetting from './pages/EditSetting';




function App () {

  const {users} = useSelector(state=>state.currentUserReducer)
  // console.log("line:100", users.role);

  const userRole = users.role || "guest";
  console.log("line:101", userRole);




  const user = users.userauth || false;
  // console.log("line:101.1",users.userauth);



  const admin = users.adminauth || false;
  console.log("line:102", users.adminauth);

  
  




  const [publicUser, setPublicUser] = useState (user);
  // console.log ('line:103', publicUser);
  const [privateUser, setPrivateUser] = useState (admin);
  // console.log ('line:104', privateUser);

  const handleLoginPublic = e => {
    e.preventDefault ();
    setPublicUser (true);
  };

  const handleLogoutPublic = e => {
    e.preventDefault ();
    setPublicUser (false);
  };
  const handleLoginPrivate = e => {
    e.preventDefault ();
    setPrivateUser (true);
  };

  const handleLogoutPrivate = e => {
    e.preventDefault ();
    setPrivateUser (false);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PublicRoutes user={publicUser} />}>
            <Route element={<Start />} user={publicUser} path="/start" />
            <Route element={<Products />} user={publicUser} path="/products" />
          </Route>
          <Route element={<PrivateRoutes user={privateUser} />}>
            <Route element={<Admin/>} path="/admin" exact />
            <Route element={<Settings />} path="/settings" />
            <Route element={<UserRoles />} path="/settings/roles" />
            <Route element={<EditUser />} path="/edituser/:userid" />
            <Route element={<EditSetting />} path="/editsetting/:userid" />
            <Route element={<AddUser />} path="/adduser" />
          </Route>

          {/* <Route  element={<Login/>} path="/login"/> */}

          {/* ### */}

          <Route
            element={
              <Overview
                publicUser={publicUser.toString ()}
                privateUser={privateUser.toString ()}
                handleLoginPublic={handleLoginPublic}
                handleLogoutPublic={handleLogoutPublic}
                handleLoginPrivate={handleLoginPrivate}
                handleLogoutPrivate={handleLogoutPrivate}
              />
            }
            exact
            path="/"
          />

          <Route element={<Login />} exact path="/login" />
          <Route element={<Register />} exact path="/Register" />
          <Route element={<Animation />}  path="/animation" />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
