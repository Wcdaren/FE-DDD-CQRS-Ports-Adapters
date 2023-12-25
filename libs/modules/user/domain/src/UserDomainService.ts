import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { useLoginMutation, userApi } from '../services/userApi';

// type xx = typeof userApi;
export const login = createAsyncThunk(
  'user/login',
  async (
    { username, password },
    { getState, dispatch, rejectWithValue, extra: { userApi, country } }
  ) => {
    console.log(`==============>pro`)
    console.log(process.env.NEXT_PUBLIC_API_HOST)

    // console.log('🚀 ~ file: UserDomainService.ts:11 ~ country:', country);
    // let response;
    // try {
    //   response = await dispatch(
    //     userApi.endpoints.login.initiate({
    //       username,
    //       password,
    //     })
    //   );
    //   console.log('🚀 ~ file: UserDomainService.ts:15 ~ response:', response);
    // } catch (error) {
    //   console.log(`==============>error`);
    //   console.log(error);
    // }
    // return response;
  }
);

// reducer

const user = createSlice({
  name: 'user',
  initialState: { name: '', age: 20 },
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload; // mutate the state all you want with immer
    },
  },
  extraReducers: (builder) => {
    // builder.addMatcher(
    // userApi.endpoints.login.matchFulfilled,
    // (state, { payload }) => {
    //   console.log('🚀 ~ file: UserDomainService.ts:42 ~ payload:', payload);
    // }
    // );
  },
});

export default user.reducer;
