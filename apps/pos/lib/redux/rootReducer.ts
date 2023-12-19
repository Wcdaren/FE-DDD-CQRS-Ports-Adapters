/* Instruments */
import { counterSlice } from './slices'

export const reducer = {
  [counterSlice.name]: counterSlice.reducer,
}
