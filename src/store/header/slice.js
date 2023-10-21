import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  profileInfo: {}
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setProfileInfo: () => {}
  }
})

export const { setTitle, setProfileInfo } = headerSlice.actions

export default headerSlice.reducer