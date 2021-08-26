import { combineReducers } from "@reduxjs/toolkit";

import categoryReducer from "../slices/category.slice";

export default combineReducers({
  category: categoryReducer,
});
