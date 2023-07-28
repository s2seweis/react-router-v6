const initialData = {
    users : [],

};

export const usersReducer = (state=initialData , action)=>{

     switch(action.type)
     {
         case 'GET_USERS' : {
             return{
                 ...state,
                 users : action.payload
             }
         }
         
         default:return state
     }

}