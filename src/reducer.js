export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  //token:"BQBNSDY8IBV7zr7NpqucyAcJYw4d2Nlx2qAt7sGGtuORGXVE7j2-syK7RyCGxnSzihsHlDCmcj45odxt1tXYM3VWnxYjGXs6OBkA4_pqRFWbO2NVQtrXPiJW9iIqeavhr1mYmuc_BmwS6u_zcx5nE27wnwvfTPLzcj1Pur3k8YXHKpI5"
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        // return a new state
        ...state, // keep current state
        user: action.user, // update state
      };
    case "SET_TOKEN":
      return {
        ...state,
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
      };
    default:
      return state;
  }
};

export default reducer;
