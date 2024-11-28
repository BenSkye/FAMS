import { configureStore } from '@reduxjs/toolkit';
import profileDataReducer from '@/core/store/user/profileData';
import userUpdatingReducer from '@/core/store/user-management/userUpdate';

const store = configureStore({
  reducer: {
    profileData: profileDataReducer,
    userUpdating: userUpdatingReducer,
  },
});

export default store;