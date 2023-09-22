<script>
  import "./app.css";
  import TopControlls from "./lib/TopControlls.svelte";
  import BiasControll from "./lib/BiasControll.svelte";

  // import LightDarkToggle from "./lib/LightDarkToggle.svelte";

  function toggleDarkMode() {
    console.log("toggleDarkMode");
    document.body.classList.toggle("dark-mode");
  }
</script>

<div class="container-main">
  <div class="main-bar">
    <TopControlls />

    {#each Array(5) as _, i}
      <BiasControll idx={i + 1} />
    {/each}
  </div>

  <div class="side-area" />
</div>

<style>
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

  @media (min-width: 500px) {
    .main-bar {
      flex-grow: 0;
      min-width: 420px;
      max-width: 420px; 
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
