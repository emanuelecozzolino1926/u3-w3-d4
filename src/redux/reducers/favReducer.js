import { ADD_TO_FAV, DELETE_FROM_FAV } from "../actions";

const initialState = {
  content: [],
};

const favReducer = function (currState = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAV: {
      return {
        ...currState,
        content: [...currState.content, action.payload],
      };
    }
    case DELETE_FROM_FAV: {
      return {
        ...currState,
        content: currState.content.filter((company) => {
          if (company === action.payload) return false;
          else {
            return true;
          }
        }),
      };
    }
    default:
      return currState;
  }
};

export default favReducer;
