import React, {useState} from 'react';
import {Navigate, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

const Login = props => {
  // console.log("line:400", props);

  // const {users} = useSelector(state=>state.usersReducer)
  const {users} = useSelector(state=>state.currentUserReducer)
  // console.log("line:401", users);
  // // console.log("line:107", users.auth);

  let text = users.username || "GUEST"
  let result = text.toUpperCase();

  return (
    <div>
      <div style={{marginTop:"25px"}}>
        <p>Public Routes</p>
        <div style={{display: 'grid', marginBottom: '25px'}}>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/">Overview</a>
          <a href="/animation">Animation</a>
          <a href="/forgotpassword">Forgot Password</a>
          <a href="/resetlink">Reset Link</a>
        </div>

        <hr />

        <p>User Routes</p>
        <div style={{display: 'grid'}}>
          <Link to="/products">Products</Link>
          <Link to="/start">Start</Link>
        </div>
        <button onClick={props.handleLoginPublic} style={{marginTop: '20px'}}>
          SignIn User Routes
        </button>
        <button onClick={props.handleLogoutPublic}>SignOut User Routes</button>
        <p>#Logged in status User Routes: {props.publicUser}</p>

        <hr />

        <p style={{marginTop: '0px'}}>Private Routes</p>
        <div style={{display: 'grid'}}>
          <Link to="/admin">Admin</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/settings/roles">User Roles</Link>
        </div>
        <button onClick={props.handleLoginPrivate} style={{marginTop: '20px'}}>
          SignIn Private Routes
        </button>
        <button onClick={props.handleLogoutPrivate}>
          SignOut Private Routes
        </button>
        <p>#Logged in status Private Routes: {props.privateUser}</p>

        <hr />

        <h3 style={{marginTop: '50px'}}>Redirect to the Login Page:</h3>
        
        <div style={{marginTop: '25px'}}>

          <button
            onClick={() => {
              localStorage.clear ();
              // localStorage.removeItem('user');
              window.location.href = '/login';
            }}
          >
            Logout {result}

          </button>

        </div>

      </div>
    </div>
  );
};

export default Login;
