import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';  // Import PropTypes

const Overview = props => {
  const {users} = useSelector (state => state.currentUserReducer);
  let text = users.username || 'GUEST';
  let result = text.toUpperCase ();

  return (
    <div style={{backgroundColor:'#fafafa'}}>
      <div style={{marginTop: ''}}>
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
        <h3 style={{marginTop: '10px'}}>Redirect to the Login Page:</h3>
        <div style={{marginTop: '15px', marginBottom:'15px'}}>
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
        <div style={{marginTop: '30px'}}>
        </div>
      </div>
    </div>
  );
};

Overview.propTypes = {
  handleLoginPublic: PropTypes.func.isRequired,
  handleLogoutPublic: PropTypes.func.isRequired,
  publicUser: PropTypes.string.isRequired,
  handleLoginPrivate: PropTypes.func.isRequired,
  handleLogoutPrivate: PropTypes.func.isRequired,
  privateUser: PropTypes.string.isRequired,
};

export default Overview;
