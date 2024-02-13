<script>
  import "./app.css";
  import TopControls from "./lib/TopControls.svelte";
  import Channel from "./lib/BareChannel.svelte";
  // import { voltageStore } from "./stores/voltageStore";
  import { onMount } from "svelte";
  import { getFullState } from "./api";
  import SubmitButton from "./lib/SubmitButton.svelte";
  import { colorMode } from "./stores/lightdark";
  import Module from "./lib/Module.svelte";

  // import LightDarkToggle from "./lib/LightDarkToggle.svelte";

  function toggleDarkMode() {
    console.log("toggleDarkMode");
    document.body.classList.toggle("dark-mode");
  }

  let total_state
  const module_1 = [
    { index: 1, bias_voltage: 0.0, activated: false, heading_text: "test 1" },
    { index: 2, bias_voltage: 0.0, activated: false, heading_text: "test 2" },
    { index: 3, bias_voltage: 0.0, activated: false, heading_text: "test 3" },
    { index: 4, bias_voltage: 0.0, activated: false, heading_text: "test 4" },
  ];

  const module_2 = [
    { index: 1, bias_voltage: 0.0, activated: false, heading_text: "test 5" },
    { index: 2, bias_voltage: 0.0, activated: false, heading_text: "test 6" },
  ];

  let fallback_state = [module_1, module_2];
  console.log("total_state: ", total_state);

  let serverNotResponding = false;
  let serverNotInitialized = false;

  // onmount you should ask for the number of channels, then set up the store. total_state updates and the BiasControl components populate
  onMount(async () => {
    try {
      const response = await getFullState();
      console.log("the response: ", response);
      total_state = response;
      if (total_state.length === 0) {
        serverNotInitialized = true;
      }
    } catch (error) {
      console.log("An error occurred: ", error);
      // Handle the error here
      serverNotResponding = true;
    }
  });

  function initialize() {
    console.log("submit button clicked");
  }

  function updateTotalState(module_index, newState) {
    total_state[module_index] = newState;
  }
</script>

<div class="container-main">
  <div class="main-bar">
    <TopControls bind:total_state />
    {#if serverNotResponding}
      <p class="server-error">Server not responding</p>
      {#each fallback_state as module_state, i}
        <Module module_index={i + 1} {module_state} {updateTotalState}/>
      {/each}
    {/if}

    {#if serverNotInitialized}
      <div class="server-error">
        Server not initialized. Input number of channels:
        <input type="number" min="1" max="100" step="1" value="" />
        <SubmitButton {colorMode} on:submit={initialize}>Submit</SubmitButton>
      </div>
    {/if}
    {#if total_state}
      {#each total_state as module_state, i}
        <Module module_index={i + 1} {module_state} />
      {/each}
    {:else}
      <div class="server-error">Loading...</div>
    {/if}

    <!-- {#each total_state as _, i}
      <Channel index={i + 1} bias_voltage={total_state[i].bias_voltage} activated={total_state[i].activated} heading_text={total_state[i].heading_text}/>
    {/each} -->
  </div>

  <div class="side-area" />
</div>

<style>
  .server-error {
    color: rgb(255, 0, 0);
    /* font-size: 0.5rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.05);
    border: 1.3px solid var(--outer-border-color);
    padding: 20px;
    background-color: var(--body-color);
  }

  input {
    background-color: var(--display-color);
    border-radius: 4px;
    border: 1.5px solid var(--inner-border-color);
    padding: 0rem 0.3rem;
    font-family: "Roboto Flex", sans-serif;
    font-weight: 300;
    font-size: 1.7rem;
    letter-spacing: 0.58rem;
    color: var(--digits-color);
    transition: background-color 0.1s ease-in-out;

    /* set top and bottom margins to 0.5 rem, sides to zero */
    margin: 0.5rem 0rem;
  }

  @media (min-width: 500px) {
    .server-error {
      margin: 5px 20px 5px 5px;
    }
  }

  @media (max-width: 500px) {
    .server-error {
      margin: 5px 5px 5px 5px;
    }
  }

  .container-main {
    display: flex;
    /* flex-direction: row; */
    /* justify-content: space-between; */
    /* align-items: stretch; */
    /* align-items: center; */
    /* min-height: 100vh;
    min-width: 100vw; */
    /* width: 100%; */
  }

  .main-bar {
    /* justify-content: center; */
    /* align-items: center; */
    /* height: 100%; */
    background-color: var(--bg-color);

    /* flex-grow: 1; */
    /* min-width: 300px; */

    /* display: flex; */
    /* flex-direction: column; */
    /* flex-grow: 1; */
  }

  .side-area {
    background-color: var(--bg-color);
  }

  /* * {
    background-color: var(--bg-color);
  } */

  @media (min-width: 500px) {
    .main-bar {
      flex-grow: 0;
      min-width: 460px;
      max-width: 460px;
      /* flex-grow: 0; */
    }
    .side-area {
      display: flex;
      flex-grow: 4;
      min-height: 100vh;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 500px) {
    .side-area {
      display: none;
    }
    .main-bar {
      /* flex-shrink: 0; */
      width: 100%;
    }
  }
</style>
