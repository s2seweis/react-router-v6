import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getCurrentUser} from '../../redux/actions/currentUserAction';
import {GoogleLogin} from '@react-oauth/google';

function GoogleLoginComponent () {
// function GoogleLoginComponent (users) {
  const dispatch = useDispatch ();

  const [loginData, setLoginData] = useState (
    localStorage.getItem ('user')
      ? JSON.parse (localStorage.getItem ('user'))
      : null,
  );

  const handleLogout = () => {
    localStorage.removeItem ('user');
    localStorage.clear ();
    setLoginData (null);
    setTimeout (() => {
        window.location.href = '/login';
      }, 500);  
    };

  const handleFailure = async () => {
  // const handleFailure = async (result) => {
  };

  const handleLogin = async googleData => {
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

    const decodedData = await res.json ();

    localStorage.setItem ('user', JSON.stringify (decodedData));
    dispatch (getCurrentUser (loginData));

    setTimeout (() => {
      window.location.href = '/';
    }, 500);
  };

  // let text = users.users.username || 'GUEST';
  // let result = text.toUpperCase ();

  return (
    <div className="">
      <div
        style={{
          margin: '25px auto',
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
    </div>
  );
}

export default GoogleLoginComponent;
