const initialData = {
    users1 : [],

};

export const displayUsersReducer = (state=initialData , action)=>{

     switch(action.type)
     {
        case 'GET_ALL_USERS' : {
            return{
                ...state,
                users1 : action.payload,
            };
        }
         default:return state;
     }

};