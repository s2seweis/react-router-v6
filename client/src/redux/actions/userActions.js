import axios from 'axios';
import {message} from 'antd';
import {getCurrentUser} from './currentUserAction';

export const userLogin = reqObj => async dispatch => {
  dispatch ({type: 'LOADING', payload: true});
  try {
    const response = await axios.post ('/api/users/login', reqObj);
    localStorage.setItem ('user', JSON.stringify (response.data.accessToken));
    dispatch ({type: 'GET_USERS', payload: response.data});
    dispatch (getCurrentUser (response.data));
    message.success ('Login Success');
    dispatch ({type: 'LOADING', payload: false});
    setTimeout (() => {
      window.location.href = '/';
    }, 500);
  } catch (error) {
    message.error ('Something went wrong, Password or Username is incorrect! ');
    dispatch ({type: 'LOADING', payload: false});
  }
};

export const requestResetPassword = reqObj => async dispatch => {
  dispatch ({type: 'LOADING', payload: true});

  try {
    const response = await axios.post (
      '/api/users/requestResetPassword',
      reqObj,
    );
    message.success ('Go and check your emails for the reset link');
    setTimeout (() => {
      window.location.href = '/resetlink';
    }, 500);
    dispatch ({type: 'LOADING', payload: false});
  } catch (error) {
    message.error (
      'Something went wrong, There is no user registered with that email',
    );
    dispatch ({type: 'LOADING', payload: false});
  }
};

export const resetPassword = reqObj => async dispatch => {
  dispatch ({type: 'LOADING', payload: true});

  try {
    const response = await axios.post ('/api/users/resetPassword', reqObj);
    message.success ('The Password changed successfully !!');
    setTimeout (() => {
      window.location.href = '/login';
    }, 500);
    dispatch ({type: 'LOADING', payload: false});
  } catch (error) {
    message.error ('Something went wrong  ');
    dispatch ({type: 'LOADING', payload: false});
  }
};

export const userRegister = reqObj => async dispatch => {
  dispatch ({type: 'LOADING', payload: true});

  try {
    const response = await axios.post ('/api/users/register', reqObj);
    message.success ('Registration successful');

    setTimeout (() => {
      window.location.href = '/login';
    }, 500);
    dispatch ({type: 'LOADING', payload: false});
  } catch (error) {
    message.error (
      'Something went wrong, maybe the email is registered already under an other account!',
    );
    dispatch ({type: 'LOADING', payload: false});
  }
};