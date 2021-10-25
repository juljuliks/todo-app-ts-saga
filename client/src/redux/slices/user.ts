import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile } from '../../types';

interface UserSliceState {
  profile: IProfile;
  isLoading: boolean;
  error: string | null
}

const initialState: UserSliceState = {
  profile: { id: 0, name: '' },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getInitialUserPending: (state) => {
      state.isLoading = true;
    },

    loginUserPending: (state, action) => {
      state.isLoading = true;
    },
    loginUserFullfilled: (state, action: PayloadAction<IProfile>) => {
      state.profile = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    loginUserRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    logoutUserPending: (state) => {
      state.isLoading = true;
    },
    logoutUserFullfilled: (state) => {
      state.profile = { id: 0, name: '' };
      state.error = null;
      state.isLoading = false;
    },
    logoutUserRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    registerUserPending: (state, action) => {
      state.isLoading = true;
    },
  },
});

export default userSlice.reducer;
export const { actions: userActions } = userSlice;
