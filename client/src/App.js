import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Start from './pages/Start';
import Landing from './pages/Landing';
import Login from './pages/Login';
// ###
import Overview from './pages/Overview';
import Register from './pages/Register';
import 'antd/dist/antd.min.css';
// ###
import PrivateRoutes from './utils/PrivateRoutes';
import PublicRoutes from './utils/PublicRoutes';
import React, {useState} from 'react';

function App () {
  const [publicUser, setPublicUser] = useState (false);
  console.log ('line:3', publicUser);
  const [privateUser, setPrivateUser] = useState (false);
  console.log ('line:4', privateUser);

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
            <Route element={<Landing />} user={publicUser} path="/landing" />
          </Route>
          <Route element={<PrivateRoutes user={privateUser} />}>
            <Route element={<Home />} path="/home" exact />
            <Route element={<Products />} path="/products" />
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

        </Routes>
      </Router>
    </div>
  );
}

export default App;
