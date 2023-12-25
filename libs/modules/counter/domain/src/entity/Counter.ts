import { createEntityAdapter } from '@reduxjs/toolkit';

export interface Counter {
  value: number;
  id: string;
  intervalMs?: number;
}

const counterEntity = createEntityAdapter<Counter>();

export { counterEntity };
