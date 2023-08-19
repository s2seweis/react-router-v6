import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentUser} from '../../redux/actions/currentUserAction';

import {GoogleLogin} from '@react-oauth/google';

function GoogleLoginComponent (users) {
  // ### - GoogleLogin
  const dispatch = useDispatch ();

  const [loginData, setLoginData] = useState (
    localStorage.getItem ('user')
      ? JSON.parse (localStorage.getItem ('user'))
      : null
  );

  console.log ('line:1', loginData);
  console.log ('line:2', setLoginData);

  const handleLogout = () => {
    localStorage.removeItem ('user');
    localStorage.clear ();
    setLoginData (null);
    setTimeout (() => {
        window.location.href = '/login';
      }, 500);  
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

    localStorage.setItem ('user', JSON.stringify (decodedData));

    console.log ('line:7', decodedData);
    console.log ('line:8', decodedData.name);
    console.log ('line:8', decodedData.email);

    dispatch (getCurrentUser (loginData));

    setTimeout (() => {
      window.location.href = '/';
    }, 500);
  };

  let text = users.users.username || 'GUEST';
  let result = text.toUpperCase ();

  // ### Google Login

  return (
    <div className="">
      {/* <h3>Google Login component</h3> */}
      {/* ### - Google Auth */}

      <div
        style={{
          // width: '50%',
          margin: '25px auto',
          // marginTop: '75px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >

        {loginData
          ? <div>
              
              <button onClick={handleLogout}>Logout</button>
            </div>
          : <GoogleLogin
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            />}

      </div>
      {/* ### Google Auth End */}
    </div>
  );
}

export default GoogleLoginComponent;
