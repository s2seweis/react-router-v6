import React, {useState} from 'react';
import { Navigate, Link } from "react-router-dom";

const Login = (props) => {
  console.log("line:200", props);


  return (
    <div>
      <div>
        <p>Public Routes</p>
        <div style={{display:'grid'}}>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        </div>

        <p>User Routes</p>
        <div style={{display: 'grid'}}>
          <Link to="/landing">Landing</Link>
          <Link to="/start">Start</Link>
        </div>
        <button onClick={props.handleLoginPublic} style={{marginTop:"20px"}} >SignIn User Routes</button>
        <button onClick={props.handleLogoutPublic}>SignOut User Routes</button>
        <p>#Logged in status User Routes: {props.publicUser}</p>

        <p style={{marginTop:"50px"}}>Private Routes</p>
        <div style={{display: 'grid'}}>
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        < button onClick={props.handleLoginPrivate} style={{marginTop:"20px"}}>SignIn Private Routes</button>
        <button onClick={props.handleLogoutPrivate}>SignOut Private Routes</button>
        <p>#Logged in status Private Routes: {props.privateUser}</p>

      </div>
    </div>
  );
};

export default Login;
