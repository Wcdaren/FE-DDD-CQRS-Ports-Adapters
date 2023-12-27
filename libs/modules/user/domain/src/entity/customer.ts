import { createEntityAdapter } from '@reduxjs/toolkit';
import { User } from './user';
type Customer = User;

const customerAdapter = createEntityAdapter<Customer>({});

export default customerAdapter;
