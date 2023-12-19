/* Core */
import {
  configureStore,
  ListenerEffectAPI,
  TypedStartListening,
  TypedAddListener,
  createListenerMiddleware,
  addListener,
} from '@reduxjs/toolkit'
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux'

/* Instruments */
import { reducer } from './rootReducer'
import { middleware } from './middleware'

const listenerMiddlewareInstance = createListenerMiddleware({
  onError: () => console.error,
})

export const makeStore = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(middleware)
  // },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddlewareInstance.middleware).concat(middleware),
})
export const useDispatch = () => useReduxDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

/* Types */
export type AppStore = typeof makeStore
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof makeStore.getState>
// @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
export type AppDispatch = typeof makeStore.dispatch

export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>

// @see https://redux-toolkit.js.org/api/createListenerMiddleware#typescript-usage
export type AppStartListening = TypedStartListening<RootState, AppDispatch>
export type AppAddListener = TypedAddListener<RootState, AppDispatch>

export const startAppListening = listenerMiddlewareInstance.startListening as AppStartListening
export const addAppListener = addListener as AppAddListener

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
