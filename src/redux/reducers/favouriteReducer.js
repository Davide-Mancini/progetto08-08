import { ADD_TO_FAVOURITE } from "../action";
const initialState = {
  favourite: [],
};
const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourite: state.favourite.concat(action.payload),
      };
    default:
      return state;
  }
};
export default favouriteReducer;
