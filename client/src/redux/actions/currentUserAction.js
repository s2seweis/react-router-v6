import axios from 'axios';
import { message } from 'antd';

// ### get the token state from the local storage
export const getCurrentUser = reqObj => async dispatch => {

  const bearerToken = JSON.parse(localStorage.getItem('user')); 
  console.log("Line:1001", bearerToken);

  // const obj = JSON.parse(json);



  dispatch({ type: 'LOADING', payload: true });

  try {
    // ### store the Token in the local storage/ cookie and make it so easy available
    // ### need to send the Bearer Token to the backend for geting the state
    const response = await axios.get('/api/users/current', {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    console.log('line:101', response);
    console.log('line:102', response.data);
    //   localStorage.setItem ('user', JSON.stringify (response.data));
    dispatch({ type: 'GET_CURRENT_USERS', payload: response.data });
    // dispatch ({type: 'GET_CUrrent_USERS', payload: response.data});
    message.success('Get Current User Success');
    dispatch({ type: 'LOADING', payload: false });

    // ### - Comment it Out, no redirect currentliy
    // setTimeout (() => {
    //   window.location.href = '/';
    // }, 500);
  } catch (error) {
    console.log('line:4');
    message.error(
      'Something went wrong, Not possible to fetch the CurrentUser from the BAckend! '
    );
    dispatch({ type: 'LOADING', payload: false });
  }
};
