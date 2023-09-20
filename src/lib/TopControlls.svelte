<script lang="ts" context="module">
  import "../app.css";
</script>

<script lang="ts">
  import LightDarkToggle from "../lib/LightDarkToggle.svelte";
  import Hamburger from "../lib/Hamburger.svelte";
  import { colorMode } from "../stores/lightdark";
  import Menu from "./Menu.svelte";
  import Button from "./Button.svelte";

  let showDropdown = false;
  function toggleMenu() {
    showDropdown = !showDropdown;
  }
  
</script>

<div class="bound-box">
  <div class="top-bar">
    <h1 class="heading">SNSPD Bias Controll</h1>
    <Hamburger onClick={toggleMenu} />
    {#if showDropdown}
      <Menu onClick={toggleMenu} menuVisible={showDropdown}/>
    {/if}
  </div>

  <div class="button-bar">
    <Button redGreen={true} colorMode={colorMode}>All On</Button>
    <Button redGreen={false} colorMode={colorMode}>All Off</Button>
  </div>
</div>

<style>

  .bound-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--outer-border-color);
  }
  .top-bar {
    display: flex;
    flex-direction: row;
    background-color: var(--heading-color);
    border-bottom: 1px solid var(--inner-border-color);
  }

  .button-bar {
    flex-grow: 1;
    background-color: var(--body-color);
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
