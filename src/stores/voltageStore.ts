import { writable } from 'svelte/store';

export interface Voltage {
  value: number;
  activated: boolean;
  name: string;}

export const voltageStore = writable<Voltage[]>([
  { value: 0.0, activated: false, name: ""},
  { value: 0.0, activated: false, name: ""},
  { value: 0.0, activated: false, name: ""},
  { value: 0.0, activated: false, name: ""},
]);


voltageStore.subscribe((value) => {
	console.log("this is store: ", value);
}); // logs '0'