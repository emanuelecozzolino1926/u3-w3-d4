import { GET_JOBS, SET_QUERY } from "../actions";

const initialState = {
  jobs: [],
  error: "",
  query: "",
};

const dataReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...currentState,
        jobs: action.payload,
      };
    case SET_QUERY:
      return {
        ...currentState,
        query: action.payload,
      };
    default:
      return currentState;
  }
};

export default dataReducer;
