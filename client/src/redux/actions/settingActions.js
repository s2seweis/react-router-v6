import axios from 'axios';
import {message} from 'antd';

export const getAllSettings=()=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true});
    
    try {
        const response = await axios.get('/api/settings/getallsettings');
        dispatch({type: 'GET_ALL_SETTINGS', payload:response.data});
        dispatch({type: 'LOADING' , payload:false});
    } catch (error) {
        console.log(error);
        dispatch({type: 'LOADING' , payload:false});
    }    
};

export const editSetting=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true});

    try {
         await axios.post('/api/settings/editsetting' , reqObj);
       
         dispatch({type: 'LOADING' , payload:false});
         message.success('Setting details updated successfully');
         setTimeout(() => {
            window.location.href='/settings';
         }, 500);
    } catch (error) {
        console.log(error);
        dispatch({type: 'LOADING' , payload:false});
    }
};