const initialState = {
  fav: {
    content: [],
  },
};

const mainReducer = function (currState = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAV": {
      return {
        ...currState,
        fav: {
          ...currState.fav,
          content: [...currState.fav.content, action.payload],
        },
      };
    }
    case "DELETE_FROM_FAV": {
      return {
        ...currState,
        fav: {
          ...currState.fav,
          content: currState.fav.content.filter((company) => {
            if (company === action.payload) return false;
            else {
              return true;
            }
          }),
        },
      };
    }
    default:
      return currState;
  }
};

export default mainReducer;
