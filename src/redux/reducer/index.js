import { combineReducers } from "@reduxjs/toolkit";

import groupReducer from "../slices/group.slice";

export default combineReducers({
  group: groupReducer,
});
