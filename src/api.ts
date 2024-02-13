
import type { Dst } from './stores/voltageStore';
import type { Module4chState, ChState } from './stores/voltageStore';


const controller = new AbortController()
const signal = controller.signal

export function sendRequest(dst: Dst) {
    // console.log("dst: ", dst)
    return fetch("/submit", {
        method: "POST",
        signal: signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dst)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // console.log("response: ", response.json());
        return response.json();
    })
}

export function getFullState() {
    return fetch("/full-state", {
        method: "GET",
        signal: signal,
    })
    .then(response => {
        if (!response.ok || !response.headers.get('Content-Type')?.includes('application/json')) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
}

export function sendFullState(state: Module4chState) {
    return fetch("/full-state", {
        method: "POST",
        signal: signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
}

export function initializeState(channel_number: number) {
    return fetch("/initialize", {
        method: "POST",
        signal: signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({channel_number})
    })
}