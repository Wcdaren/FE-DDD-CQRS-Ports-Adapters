import { createReducer, createSlice } from '@reduxjs/toolkit';

/**
 * id*	integer($int32)
firstname*	string
lastname*	string
email*	string
phone	string
nullable: true
user_hash	string
nullable: true
channel	string
 */
export enum Channel {
  web = 'web',
  pos = 'pos',
}
export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  user_hash?: string;
  channel: Channel;
}

const initialState: User = {
  id: 0,
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  user_hash: '',
  channel: Channel.web,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
  },
});
export default userSlice;
