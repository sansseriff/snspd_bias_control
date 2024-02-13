import { writable } from 'svelte/store';

export const colorMode = writable(false);

// const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// console.log("isDarkMode: ", isDarkMode);
// colorMode.set(isDarkMode);
// setMode(isDarkMode);

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
setMode(isDarkMode);

window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change',({ matches }) => {
  setMode(matches);
})

export function setMode(value: boolean) {
    let dark = value;
    // console.log("running setMode");
    colorMode.set(dark);

    // update page styling
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // store the theme as a local override
    localStorage.theme = dark ? "dark" : "light";

    // if the toggled-to theme matches the system defined theme, clear the local override
    // this effectively provides a way to override or revert to "automatic" setting mode
    if (
      window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches
    ) {
      localStorage.removeItem("theme");
    }

    return dark;
  }