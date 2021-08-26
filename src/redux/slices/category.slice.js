import { createSlice } from "@reduxjs/toolkit";

const category = localStorage.getItem("category")
  ? JSON.parse(localStorage.getItem("category"))
  : {
      categoryList: [
        {
          _categoryId: 0,
          label: "Today",
          taskList: [
            {
              label: "Do the laundry",
              checked: false,
            },
            {
              label: "Clean the dishes",
              checked: false,
            },
            {
              label: "Make food",
              checked: false,
            },
            {
              label: "Clean room",
              checked: false,
            },
            {
              label: "Feed pet",
              checked: false,
            },
            {
              label: "Feed fish",
              checked: false,
            },
            {
              label: "Walk pet",
              checked: false,
            },
            {
              label: "Clean pet",
              checked: false,
            },
            {
              label: "Feed pet",
              checked: false,
            },
          ],
          completedList: [],
        },
      ],
    };

const categorySlice = createSlice({
  name: "category",
  initialState: category,
  reducers: {
    setCategory(state, action) {
      const { categoryList } = action.payload;
      state.categoryList = categoryList;
    },
    setTaskList(state, action) {
      const { index, taskList } = action.payload;
      state.categoryList[index].taskList = taskList;
    },
    setCompletedList(state, action) {
      const { index, completedList } = action.payload;
      state.categoryList[index].completedList = completedList;
    },
  },
});

export const { setCategory, setTaskList, setCompletedList } =
  categorySlice.actions;

export default categorySlice.reducer;
