import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../reducers/favReducer";
import dataReducer from "../reducers/dataReducer";

const store = configureStore({
  reducer: {
    fav: favReducer,
    data: dataReducer,
  },
});

export default store;
