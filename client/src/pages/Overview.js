import React, {useState} from 'react';
import {Navigate, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

// ### New: Google Auth

import {GoogleLogin, useGoogleLogin} from '@react-oauth/google';

// ### New: Google Auth


const Login = props => {


  const [loginData, setLoginData] = useState (
    localStorage.getItem ('loginData')
      ? JSON.parse (localStorage.getItem ('loginData'))
      : null
  );

  console.log ('line:1', loginData);
  console.log ('line:2', setLoginData);

  // ### - useGoogleLogin

  const handleLogout = () => {
    localStorage.removeItem ('loginData');
    setLoginData (null);
  };

  const handleFailure = async result => {
    console.log ('line:3', result);
  };


  const handleLogin = async googleData => {
    console.log ('line:4', googleData.tokenId);
    console.log ('line:5', googleData.credential);
    const res = await fetch ('/api/users/google-login', {
      method: 'POST',
      body: JSON.stringify ({
        token: googleData.credential,
        secret: googleData.clientID,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log ('line:6', res);

    const decodedData = await res.json ();
    let test = decodedData;

    localStorage.setItem ('loginData', JSON.stringify (decodedData));

    // setTimeout (() => {
    //   window.location.href = '/';
    // }, 500);
    
    console.log ('line:7', decodedData);
    console.log ('line:8', decodedData.name);
    console.log ('line:8', decodedData.email);

    // const data = await res.json();

    // setLoginData(data);
    // localStorage.setItem('loginData', JSON.stringify(data));
    // console.log("line:4", googleData);
  };

  // console.log("line:400", props);

  // const {users} = useSelector(state=>state.usersReducer)
  const {users} = useSelector (state => state.currentUserReducer);
  // console.log("line:401", users);
  // // console.log("line:107", users.auth);

  let text = users.username || 'GUEST';
  let result = text.toUpperCase ();

  return (
    <div>
      <div style={{marginTop: '25px'}}>
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

        {/* ### - Google Auth */}

        <div
          style={{
            width: '50%',
            margin: 'auto',
            marginTop: '75px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >

          {loginData
            ? <div>
                <h3>You logged in as {loginData.email}</h3>
                <button onClick={handleLogout}>Logout</button>
              </div>
            : <GoogleLogin
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
              />}

        </div>

        {/* ### Google Auth */}

      </div>
    </div>
  );
};

export default Login;
