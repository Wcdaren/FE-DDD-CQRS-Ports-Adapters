import customerAdapter from './entity/customer';
import { createSliceWithThunks } from '@castlery/shared/redux/core';

export const customerSlice = createSliceWithThunks({
  name: 'customer',
  initialState: customerAdapter.getInitialState({
    loading: false,
    error: {},
    // activeRequestId: null,
  }),
  reducers: (create) => {
    const createAThunk = create.asyncThunk.withTypes<{
      rejectValue: { error: string };
    }>();
    return {
      // addCustomer: create.addOne,
      // updateCustomer: create.updateOne,
      // removeCustomer: create.removeOne,
      addCustomer: create.reducer((state, { payload, type }) => {}),
      updateCustomer: create.reducer((state, action) => {}),
      removeCustomer: create.asyncThunk(
        async (id: string, action) => {
          const res = await fetch(`myApi/todos?id=${id}`);
          return await res.json();
        },
        {
          pending: (state) => {
            state.loading = true;
          },
          rejected: (state, action) => {
            state.error = action.payload ?? action.error;
          },
          fulfilled: (state, action) => {
            state.todos.push(action.payload);
          },
          settled: (state, action) => {
            state.loading = false;
          },
          options: {},
        }
      ),
    };
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchUsers.fulfilled, usersAdapter.upsertMany);
    // builder.addCase(updateUser.fulfilled, (state, { payload }) => {
    //   const { id, ...changes } = payload;
    //   usersAdapter.updateOne(state, { id, changes });
    // });
  },
});

export const { addCustomer, updateCustomer, removeCustomer } =
  customerSlice.actions;
