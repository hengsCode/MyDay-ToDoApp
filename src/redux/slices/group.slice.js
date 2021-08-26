import { createSlice } from "@reduxjs/toolkit";

const group = localStorage.getItem("group")
  ? JSON.parse(localStorage.getItem("group"))
  : {
      groupList: [
        {
          _groupId: 0,
          isGroup: true,
          label: "Today",
          categoryList: [
            {
              _categoryId: 0,
              label: "Today",
              taskList: [
                {
                  _taskId: 0,
                  label: "Do the laundry",
                  checked: false,
                },
                {
                  _taskId: 1,
                  label: "Clean the dishes",
                  checked: false,
                },
                {
                  _taskId: 2,
                  label: "Make food",
                  checked: false,
                },
                {
                  _taskId: 3,
                  label: "Clean room",
                  checked: false,
                },
                {
                  _taskId: 4,
                  label: "Feed pet",
                  checked: false,
                },
                {
                  _taskId: 5,
                  label: "Feed fish",
                  checked: false,
                },
                {
                  _taskId: 6,
                  label: "Walk pet",
                  checked: false,
                },
                {
                  _taskId: 7,
                  label: "Clean pet",
                  checked: false,
                },
                {
                  _taskId: 8,
                  label: "Feed pet",
                  checked: false,
                },
              ],
              completedList: [],
            },
          ],
        },
        {
          _groupId: 1,
          isGroup: false,
          label: "Unassigned",
          categoryList: [],
        },
        {
          _groupId: 2,
          isGroup: true,
          label: "University",
          categoryList: [
            {
              _categoryId: 0,
              label: "INFS",
              taskList: [
                {
                  _taskId: 0,
                  label: "Walk pet",
                  checked: false,
                },
                {
                  _taskId: 1,
                  label: "Clean pet",
                  checked: false,
                },
                {
                  _taskId: 2,
                  label: "Feed pet",
                  checked: false,
                },
              ],
              completedList: [],
            },
            {
              _categoryId: 1,
              label: "COMP",
              taskList: [
                {
                  _taskId: 0,
                  label: "Walk pet",
                  checked: false,
                },
                {
                  _taskId: 1,
                  label: "Clean pet",
                  checked: false,
                },
                {
                  _taskId: 2,
                  label: "Feed pet",
                  checked: false,
                },
              ],
              completedList: [],
            },
            {
              _categoryId: 2,
              label: "FINS",
              taskList: [
                {
                  _taskId: 0,
                  label: "Walk pet",
                  checked: false,
                },
                {
                  _taskId: 1,
                  label: "Clean pet",
                  checked: false,
                },
                {
                  _taskId: 2,
                  label: "Feed pet",
                  checked: false,
                },
              ],
              completedList: [],
            },
            {
              _categoryId: 3,
              label: "FINS",
              taskList: [
                {
                  _taskId: 0,
                  label: "Walk pet",
                  checked: false,
                },
                {
                  _taskId: 1,
                  label: "Clean pet",
                  checked: false,
                },
                {
                  _taskId: 2,
                  label: "Feed pet",
                  checked: false,
                },
              ],
              completedList: [],
            },
            {
              _categoryId: 4,
              label: "FINS",
              taskList: [
                {
                  _taskId: 0,
                  label: "Walk pet",
                  checked: false,
                },
                {
                  _taskId: 1,
                  label: "Clean pet",
                  checked: false,
                },
                {
                  _taskId: 2,
                  label: "Feed pet",
                  checked: false,
                },
              ],
              completedList: [],
            },
          ],
        },
      ],
    };

const groupSlice = createSlice({
  name: "group",
  initialState: group,
  reducers: {
    setGroup(state, action) {
      // add a new group or categoryList
      const { groupList } = action.payload;
      state.groupList = groupList;
    },
    setCategory(state, action) {
      const { categoryList, _groupId } = action.payload;
      state.groupList = state.groupList.map((group) =>
        group._groupId === _groupId
          ? { ...group, categoryList: categoryList }
          : group
      );
    },
    setTaskList(state, action) {
      // update the taskList of a specific category in a group
      const { _groupId, _categoryId, taskList } = action.payload;
      state.groupList = state.groupList.map((group) =>
        group._groupId === _groupId
          ? {
              ...group,
              categoryList: group.categoryList.map((category) =>
                category._categoryId === _categoryId
                  ? { ...category, taskList: taskList }
                  : category
              ),
            }
          : group
      );
    },
    setCompletedList(state, action) {
      // update the completedList of a specific category in a group
      const { _groupId, _categoryId, completedList } = action.payload;
      state.groupList = state.groupList.map((group) =>
        group._groupId === _groupId
          ? {
              ...group,
              categoryList: group.categoryList.map((category) =>
                category._categoryId === _categoryId
                  ? { ...category, completedList: completedList }
                  : category
              ),
            }
          : group
      );
    },
  },
});

export const { setCategory, setTaskList, setCompletedList, setGroup } =
  groupSlice.actions;

export default groupSlice.reducer;
