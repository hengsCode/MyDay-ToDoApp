import { combineReducers } from "@reduxjs/toolkit";

<<<<<<< HEAD
import categoryReducer from "../slices/category.slice";
import avatarReducer from "../slices/avatar.slice";

export default combineReducers({
  category: categoryReducer,
  avatar: avatarReducer,
=======
import groupReducer from "../slices/group.slice";

export default combineReducers({
  group: groupReducer,
>>>>>>> feat/group-lists
});
