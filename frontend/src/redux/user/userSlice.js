import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading: false,

}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    logInStart: (state) => {
      
      state.loading = true;
    },
    logInComplete: (state,action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    logInFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logOutStart: (state) => {
      state.loading = true;
    },
    logOutComplete: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    logOutFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { logInComplete, logInFailed, logInStart,logOutComplete,logOutFailed,logOutStart } = userSlice.actions

export default userSlice.reducer