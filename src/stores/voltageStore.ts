import { writable } from 'svelte/store';

export interface Dst {
  module_index: number;
  index: number;
  bias_voltage: number;
  activated: boolean;
  heading_text: string;}

export interface ChState {
  index: number;
  bias_voltage: number;
  activated: boolean;
  heading_text: string;}

export type Module4chState = [ChState, ChState, ChState, ChState]


// export const voltageStore = writable<Dst[]>([
//   { index: 1, bias_voltage: 0.0, activated: false, heading_text: ""},
//   { index: 2, bias_voltage: 0.0, activated: false, heading_text: ""},
//   { index: 3, bias_voltage: 0.0, activated: false, heading_text: ""},
//   { index: 4, bias_voltage: 0.0, activated: false, heading_text: ""},
// ]);




// voltageStore.subscribe((value) => {
// 	console.log("this is store: ", value);

// // .then(res => res.json()).then(data => {
// //     State[data.channel].voltage = data.voltage
// //     State[data.channel].state = data.state
// //     apply_state(State)
// // }).catch(error => console.log("catched 2", error))





  
// }); // logs '0'