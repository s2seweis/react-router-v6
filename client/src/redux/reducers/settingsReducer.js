const initialData = {
    settings1: [
      // Comment out content of the array when you can get the data from MongoDB
      {
        '_id': '64cb57360224bb7ea049b175',
        '__0': 0,
        'adminauth': true,
        'password': '1234',
        'role': 'master of the universe',
        'username': 'John Doe',
      },
    ],
  };
  
  export const settingsReducer = (state = initialData, action) => {
    switch (action.type) {
      case 'GET_ALL_SETTINGS': {
        return {
          ...state,
          settings1: action.payload,
        };
      }
      default:
        return state;
    }
  };