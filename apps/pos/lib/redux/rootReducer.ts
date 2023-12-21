/* Instruments */
import { counterApi } from './services/fetchIdentityCount';
import { counterSlice } from './slices';

export const reducer = {
  [counterSlice.name]: counterSlice.reducer,
  [counterApi.reducerPath]: counterApi.reducer,
};
