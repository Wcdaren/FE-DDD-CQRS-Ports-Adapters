/* Instruments */
import { counterService } from '@castlery/modules/counter/domain';
import { counterApi } from '@castlery/modules/counter/service';
import { userApi } from '@castlery/modules/user/service'

export const reducer = {
  [counterService.name]: counterService.reducer,
  [counterApi.reducerPath]: counterApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  // [UserDomainService.name]: UserDomainService,
};
