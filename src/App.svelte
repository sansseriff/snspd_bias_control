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
      <BiasControll number={i + 1} />
    {/each}
  </div>

  <div class="side-area" />
</div>

<style>
  .container-main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* align-items: center; */
    min-height: 100vh;
    /* min-width: 100vw; */
    width: 100%;
  }

  .main-bar {
    justify-content: center;
    align-items: center;
    /* height: 100%; */
    background-color: var(--bg-color);

    flex-grow: 1;
    /* min-width: 300px; */

    /* display: flex; */
    flex-direction: column;
  }

  .side-area {
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: var(--bg-color);
    flex-grow: 4;
  }


  @media (min-width: 400px) {
    .main-bar {
      flex-grow: 1;
      min-width: 380px;
      max-width: 380px;
    }
  }

  @media (max-width: 400px) {
    .side-area {
      display: none;
    }
  }
</style>
