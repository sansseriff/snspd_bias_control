import { writable } from 'svelte/store';

export interface Voltage {
  value: number;
  activated: boolean;}

export const voltageStore = writable<Voltage[]>([
  { value: 1.5, activated: false },
  { value: 3.3, activated: false },
  { value: 5, activated: false },
  { value: 12, activated: false },
]);