import React, {useState} from 'react';

const Login = (props) => {
  // console.log("line:200", props);


  return (
    <div>
      <div>
        <p>Public Routes</p>
        <a href="/login">Login</a>

        <p>User Routes</p>
        <div style={{display: 'grid'}}>
          <a href="/landing">Landing</a>
          <a href="/start">Start</a>
        </div>
        <button onClick={props.handleLoginPublic} style={{marginTop:"20px"}} >SignIn User Routes</button>
        <button onClick={props.handleLogoutPublic}>SignOut User Routes</button>
        <p>#Logged in status User Routes: {props.publicUser}</p>

        <p style={{marginTop:"50px"}}>Private Routes</p>
        <div style={{display: 'grid'}}>
          <a href="/home">Home</a>
          <a href="/products">Products</a>
        </div>
        < button onClick={props.handleLoginPrivate} style={{marginTop:"20px"}}>SignIn Private Routes</button>
        <button onClick={props.handleLogoutPrivate}>SignOut Private Routes</button>
        <p>#Logged in status Private Routes: {props.privateUser}</p>

      </div>
    </div>
  );
};

export default Login;
