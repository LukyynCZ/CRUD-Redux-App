import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../Data';

export const usersSlice = createSlice({
  name: 'users',
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          if (action.payload.name != '') {
            user.name = action.payload.name;
          }
          if (action.payload.username != '') {
            user.username = action.payload.username;
          }
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
