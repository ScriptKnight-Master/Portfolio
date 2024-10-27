import { combineReducers } from "@reduxjs/toolkit";
import theme from "./themeSlice";

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    ...asyncReducers,
  });

  return combinedReducer(state, action);
};

export default createReducer;
