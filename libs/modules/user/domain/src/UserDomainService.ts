import { createSliceWithThunks } from '@castlery/shared/redux/core';
import type { ExtraArgument } from '@castlery/shared/redux/pos';
// import { useLoginMutation, userApi } from '../services/userApi';

// reducer

const userSlice = createSliceWithThunks({
  name: 'userSlice',
  initialState: { name: '', age: 20 },
  reducers: (create) => {
    return {
      login: create.asyncThunk(
        async (
          { username, password },
          { dispatch, extra, rejectWithValue, fulfillWithValue }
        ) => {
          const { userApi, cookies } = extra as ExtraArgument;
          const { data, error } = await dispatch(
            userApi.login({
              username,
              password,
            })
          );
          if (error) {
            rejectWithValue(error);
            return;
          }
          const {
            access_token,
            refresh_token,
            created_at,
            expires_in,
            token_type,
          } = data;
          cookies.set('access_token', access_token, {
            expires: expires_in,
          });
          cookies.set('refresh_token', refresh_token, {
            expires: expires_in,
          });
          fulfillWithValue(data);
        }
      ),
    };
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
