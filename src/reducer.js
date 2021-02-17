import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
};

// State- How it currently looks
// Action - how we manipulate what the data there looks like
const reducer = (state, action) => {

    // Debugging tool that will save headaches 
    // reducers primary job is to listen to actions
    // Action -> type, [payload]

    console.log(action);

    switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            user: action.user,
          };
          default:
            return state;
    }
}

export default reducer;