'use client'

/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import { makeStore } from '@/lib/redux'

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={makeStore}>{props.children}</Provider>
}
