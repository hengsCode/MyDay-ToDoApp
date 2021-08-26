import { createSlice } from "@reduxjs/toolkit";

const avatar = localStorage.getItem("avatar")
  ? JSON.parse(localStorage.getItem("avatar"))
  : { background: "#FFFFFF", init: "#000000" };

const avatarSlice = createSlice({
  name: "avatar",
  initialState: avatar,
  reducers: {
    setAvatar(state, action) {
      const { background, init } = action.payload;
      state.background = background;
      state.init = init;
    },
  },
});

export const { setAvatar } = avatarSlice.actions;

export default avatarSlice.reducer;
