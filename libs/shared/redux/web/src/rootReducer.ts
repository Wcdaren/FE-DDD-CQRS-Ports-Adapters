/* Instruments */
import { counterSlice } from '@castlery/modules/counter/domain';
import { counterApi } from '@castlery/modules/counter/service';
import { userApi } from '@castlery/modules/user/service'

export const reducer = {
  [counterSlice.name]: counterSlice.reducer,
  [counterApi.reducerPath]: counterApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  // [UserDomainService.name]: UserDomainService,
};
