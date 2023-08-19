import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import {getCurrentUser} from '../../redux/actions/currentUserAction';
import {useDispatch, useSelector} from 'react-redux';

function FacebookLoginComponent () {
  const dispatch = useDispatch ();

  const [loginData, setLoginData] = useState (
    localStorage.getItem ('user')
      ? JSON.parse (localStorage.getItem ('user'))
      : null
  );

  const responseFacebook = async response => {
    console.log ('line:1', response);

    const res = await fetch ('/api/users/facebook-login', {
      method: 'POST',
      body: JSON.stringify ({
        userfacebook: response,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log ('line:6', res);

    const decodedData = await res.json ();
    let test = decodedData;
    console.log ('line:7', decodedData);

    localStorage.setItem ('user', JSON.stringify (decodedData));

    dispatch (getCurrentUser (loginData));

    // setTimeout (() => {
    //   window.location.href = '/';
    // }, 500);
  };

  //   const handleLogin = async googleData => {
  //     console.log ('line:4', googleData.tokenId);
  //     console.log ('line:5', googleData.credential);
  //     const res = await fetch ('/api/users/google-login', {
  //       method: 'POST',
  //       body: JSON.stringify ({
  //         token: googleData.credential,
  //         secret: googleData.clientID,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     console.log ('line:6', res);

  //     const decodedData = await res.json ();
  //     let test = decodedData;

  //     localStorage.setItem ('user', JSON.stringify (decodedData));

  //     console.log ('line:7', decodedData);
  //     console.log ('line:8', decodedData.name);
  //     console.log ('line:8', decodedData.email);

  //     dispatch (getCurrentUser (loginData));

  //     // setTimeout (() => {
  //     //   window.location.href = '/';
  //     // }, 500);
  //   };

  return (
    <div className="spinner">
      <h3> FacebookLogin </h3>
      <FacebookLogin
        appId="1448062509371972"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    </div>
  );
}

export default FacebookLoginComponent;
