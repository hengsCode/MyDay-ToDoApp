import { combineReducers } from "@reduxjs/toolkit";

import categoryReducer from "../slices/category.slice";
import avatarReducer from "../slices/avatar.slice";

export default combineReducers({
  category: categoryReducer,
  avatar: avatarReducer,
});
