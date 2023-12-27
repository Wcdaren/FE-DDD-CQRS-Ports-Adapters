/* Core */
import {
  configureStore,
  ListenerEffectAPI,
  TypedStartListening,
  TypedAddListener,
  createListenerMiddleware,
  addListener,
} from '@reduxjs/toolkit';
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux';
import cookies from 'js-cookie';
import type { CookiesStatic } from 'js-cookie';
/* Instruments */
import { reducer } from './rootReducer';
import { middleware } from './middleware';
import { userApi } from '@castlery/modules/user/service';
// import { userApi } from '@/modules/User/services/userApi';
const listenerMiddlewareInstance = createListenerMiddleware({
  onError: () => console.error,
});

const preloadedState = {
  todos: [
    {
      text: 'Eat food',
      completed: true,
    },
    {
      text: 'Exercise',
      completed: false,
    },
  ],
  visibilityFilter: 'SHOW_COMPLETED',
};

const extraArgument = {
  userApi: {
    // [`${userApi.endpoints.login.name}`]: userApi.endpoints.login.initiate,
    login: userApi.endpoints.login.initiate,
  },
  OrderApi: {},
  country: 'AU',
  cookies: cookies as CookiesStatic,
};
export const makeStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    })
      .prepend(listenerMiddlewareInstance.middleware)
      .concat(middleware),
  preloadedState,
});

export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

/* Types */
export type AppStore = typeof makeStore;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof makeStore.getState>;
// @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
export type AppDispatch = typeof makeStore.dispatch;

export type ExtraArgument = typeof extraArgument;

export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>;

// @see https://redux-toolkit.js.org/api/createListenerMiddleware#typescript-usage
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export type AppAddListener = TypedAddListener<RootState, AppDispatch>;

export const startAppListening =
  listenerMiddlewareInstance.startListening as AppStartListening;
export const addAppListener = addListener as AppAddListener;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
