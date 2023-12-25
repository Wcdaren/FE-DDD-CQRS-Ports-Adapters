'use client';
import { makeStore } from '@castlery/shared/redux/pos';
/* Core */
import { Provider } from 'react-redux';
// import { makeStore } from './redux'

/* Instruments */

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={makeStore}>{props.children}</Provider>;
};
