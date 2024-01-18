<script lang="ts" context="module">
  import "../app.css";
</script>

<script lang="ts">
  import LightDarkToggle from "../lib/LightDarkToggle.svelte";
  import Hamburger from "../lib/Hamburger.svelte";
  import { colorMode } from "../stores/lightdark";
  import Menu from "./Menu.svelte";
  import Button from "./Button.svelte";
  import { voltageStore } from "../stores/voltageStore";
  // import { update } from 'svelte/store';

  let showDropdown = false;
  function toggleMenu() {
    showDropdown = !showDropdown;
  }

  function allOn() {

    // this method sends subscribed events for each item in the store (messy)
    // for (let i = 0; i < $voltageStore.length; i++) {
    //   $voltageStore[i].activated = true;
    // }
    

    // with the update method you only trigger one event for 
    // anything else that is subscribed to the store
    voltageStore.update((store) => {
    store.forEach((item) => {
      item.activated = true;
    });
    return store;
  });
  }
  function allOff() {
    // for (let i = 0; i < $voltageStore.length; i++) {
    //   $voltageStore[i].activated = false;
    // }
    voltageStore.update((store) => {
    store.forEach((item) => {
      item.activated = false;
    });
    return store;
  });
  }

</script>

<div class="bound-box">
  <div class="top-bar">
    <h1 class="heading">SNSPD Bias Control</h1>
    <Hamburger onClick={toggleMenu} />
    {#if showDropdown}
      <Menu onClick={toggleMenu} menuVisible={showDropdown} />
    {/if}
  </div>

  <div class="button-bar">
    <Button redGreen={true} {colorMode} on:click={allOn}>All On</Button>
    <Button redGreen={false} {colorMode} on:click={allOff}>All Off</Button>
  </div>
</div>

<style>
  .bound-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.05);
    border: 1.3px solid var(--outer-border-color);
  }
  .top-bar {
    display: flex;
    flex-direction: row;
    background-color: var(--heading-color);
    border-bottom: 1.3px solid var(--inner-border-color);
  }

  .button-bar {
    flex-grow: 1;
    background-color: var(--body-color);
    padding: 1rem;
  }

  .bg-red-990 {
    background-color: #321818;
    /* opacity: 0.1; */
  }

  .bg-cyan-990 {
    background-color: #183232;
    /* opacity: 0.1; */
  }

  .heading {
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;

    padding-left: 8px;
    padding-right: 13px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: var(--text-color);
  }

  @media (min-width: 400px) {
    .bound-box {
      margin: 5px 20px 5px 5px;
    }
  }

  @media (max-width: 400px) {
    .bound-box {
      margin: 5px 5px 5px 5px;
    }
  }
</style>
