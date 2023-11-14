const initialData = {
    users : [],

};

export const currentUserReducer = (state=initialData , action)=>{

     switch(action.type)
     {
         case 'GET_CURRENT_USERS' : {
             return{
                 ...state,
                 users : action.payload,
             };
         }
         default:return state;
     }

};