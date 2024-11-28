import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUpdating: false,
  userData: {
    userType: "",
    name: "",
    email: "",
    dateOfBirth: null,
    gender: "",
    isActive: ""
  }
};

const userUpdatingSlice = createSlice({
  name: 'userUpdating',
  initialState,
  reducers: {
    setIsUpdating: (state, action) => {
      state.isUpdating = action.payload;
    },

    setUserData: (state, action) => {
      state.userData = {
        userType: action.payload.type ?? "Trainer",
        name: action.payload.fullName ?? "",
        email: action.payload.email ?? "",
        dateOfBirth: action.payload.dataOfBirth ?? "",
        gender: action.payload.gender ?? "Male",
        isActive: action.payload.isActive ?? false,
        phone: action.payload.phone ?? ""
      };
    }
  },
});

export const { setIsUpdating, setUserData } = userUpdatingSlice.actions;
export default userUpdatingSlice.reducer;