import { writable } from 'svelte/store';

export interface Voltage {
  value: number;
  activated: boolean;}

export const voltageStore = writable<Voltage[]>([
  { value: 0.0, activated: false },
  { value: 0.0, activated: false },
  { value: 0.0, activated: false },
  { value: 0.0, activated: false },
  { value: 0.0, activated: false },
]);


voltageStore.subscribe((value) => {
	console.log("this is store: ", value);
}); // logs '0'