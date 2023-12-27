import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';

// name is up to you
export const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
