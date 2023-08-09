import axios from 'axios';
import {message} from 'antd';
import { getCurrentUser } from './currentUserAction';

export const userLogin = reqObj => async dispatch => {
  dispatch ({type: 'LOADING', payload: true});

  // console.log("line:100", reqObj);

  try {
    const response = await axios.post ('/api/users/login', reqObj);
    // console.log ('line:101', response);
    // console.log ('line:102', response.data.accessToken);
    localStorage.setItem ('user', JSON.stringify (response.data.accessToken));
    dispatch ({type: 'GET_USERS', payload: response.data});
    dispatch (getCurrentUser(response.data));
    // dispatch ({type: 'GET_CUrrent_USERS', payload: response.data});
    message.success ('Login Success');
    dispatch ({type: 'LOADING', payload: false});

    // ### - Comment it Out, no redirect currentliy
    setTimeout (() => {
      window.location.href = '/';
    }, 500);
  } catch (error) {
    // console.log ('line:103');
    message.error ('Something went wrong, Password or Username is incorrect! ');
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
      'Something went wrong, maybe the email is registered already under an other account!'
    );
    // console.log ('line:104');
    dispatch ({type: 'LOADING', payload: false});
  }
};

// ###

// export const getAllUsers=()=>async dispatch=>{

//     dispatch({type: 'LOADING' , payload:true})

//     try {
//         const response = await axios.get('/api/users/getallusers')
//         dispatch({type: 'GET_ALL_USERS', payload:response.data})
//         dispatch({type: 'LOADING' , payload:false})
//     } catch (error) {
//         console.log(error)
//         dispatch({type: 'LOADING' , payload:false})
//     }
// }
// ###
