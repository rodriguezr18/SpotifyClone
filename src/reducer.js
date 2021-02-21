

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    
    // Good habit, have a Default value
    //REMOVE after finished developing helps debugging
    // token: "BQDvddwavCq-XhbBJfXrXZ72M1qFxhLJBWns6pKapp3AMIe9isJ0EAfwTSvjBxdY3LXZUq1i2Sodv80qg7GtXZoGBlNTBP5O6wx7VcRjBMGOJuVQJaCQeBh7RxRUoZ-wfrOnHlVZZJlQKJ1mjfjj_DDLnK0UShtOIRAOo4qME9cehC8NxKFo",
};

// State- How it currently looks 
// Action - how we manipulate what the data there looks like
const reducer = (state, action) => {

    // Debugging tool that will save headaches 
    // reducers primary job is to listen to actions
    // Action -> type, [payload]

    console.log(action);

    switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: action.user,
          };

          case "SET_TOKEN":
          return {
            ...state,
            // pushes it into the state
            token: action.token,
          };

          case "SET_PLAYLISTS":
            return {
              ...state,
              playlists: action.playlists,
            };

            case "SET_DISCOVER_WEEKLY":
              return {
                ...state,
                discover_weekly: action.discover_weekly,
              }



          // nothing changes , doesn't break app
          default:
            return state;
    }
};

export default reducer;
