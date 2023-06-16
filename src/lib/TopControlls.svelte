<script lang="ts" context="module">
  import "../app.css";
</script>

<script lang="ts">
  import LightDarkToggle from "../lib/LightDarkToggle.svelte";
  import Hamburger from "../lib/Hamburger.svelte";
  import { onMount } from "svelte";
  import { colorMode } from "../stores/lightdark";

  // let dark: boolean = $colorMode;
</script>

<div class="bound-box">
  <div class="top-bar">
    <h1 class="heading">SNSPD Bias Controll</h1>
    <LightDarkToggle />
    <Hamburger />
  </div>

  <div class="button-bar">
    <button
      class="{$colorMode
        ? 'bg-cyan-990 hover:bg-cyan-900'
        : 'bg-cyan-100'} text-xs font-medium my-2 ml-2 border border-cyan-500 rounded-sm px-4 py-1 text-cyan-500 hover:text-cyan-400 button cyan"
    >
      All On
    </button>
    <button
      class="{$colorMode
        ? 'bg-red-990 hover:bg-red-900'
        : 'bg-red-100'} text-xs font-medium my-2 ml-2 border border-red-500 rounded-sm px-4 py-1 text-red-500 hover:text-red-400 button red"
    >
      All Off
    </button>
  </div>
</div>

<style>
  .bound-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* flex-grow: 1; */
    /* border: 1px solid red; */
    /* height: 50px; */

    /* margin: 3px 20px 3px 5px; */
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

  h1 {
    color: var(--text-color);
    font-size: 0.85rem;
  }

  .heading {
    /* margin: 0px; */
    margin-right: auto;
    /* padding: 0px; */
    margin-top: auto;
    margin-bottom: auto;

    padding-left: 5px;
    padding-right: 10px;
    color: var(--text-color);
    /* margin-left: 5px; */
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

  .button {
    position: relative;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
  }

  .button:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    padding-top: 300%;
    padding-left: 300%;
    margin-left: -20px !important;
    margin-top: -0%;
    opacity: 0;
    transition: all 0.6s;
  }

  .button.red:after {
    background: #f36666;
  }

  .button.cyan:after {
    background: #26f4dc;
  }

  .button:active:after {
    padding: 0;
    margin: 0;
    opacity: 0.5;
    transition: 0s;
  }
</style>
