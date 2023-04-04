import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users'

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
