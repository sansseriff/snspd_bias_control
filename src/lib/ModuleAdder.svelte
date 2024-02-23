<script>
    import SubmitButton from "./SubmitButton.svelte";
    import { colorMode } from "../stores/lightdark";

    function initialize() {
        console.log("submit button clicked");
    }
</script>

<div class="basic-block">
    <div class="top-bar">
        <div class="top-left">
            <h1 class="heading">Add a module</h1>
        </div>
        <!-- <div class="top-right">
          <div class="dot-menu">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  stroke="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
              >
                  <path
                      d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                      stroke-width="0.3"
                  />
              </svg>
            </div>
      </div> -->
    </div>
    <div class="main-controlls">
        <!-- <div class="warning">Server not initialized. Add a module:</div> -->
        <div
            style="display: flex; flex-direction: column; justify-content: space-between;"
        >
            <select style="height: 2.6rem; width: 100%">
                <option value="" selected>Select module slot</option>
                <option value="1">Slot 1</option>
                <option value="2">Slot 2</option>
                <option value="3">Slot 3</option>
                <option value="4">Slot 4</option>
                <option value="5">Slot 5</option>
                <option value="6">Slot 6</option>
                <option value="7">Slot 7</option>
                <option value="8">Slot 8</option>
            </select>
            <select style="height: 2.6rem; width: 100%">
                <option value="" selected>Select module type</option>
                <option value="1">4 Ch. Triax</option>
                <option value="1">16 Ch. Micro Coax</option>
            </select>
        </div>
        <SubmitButton {colorMode} on:submit={initialize}
            >Add Module</SubmitButton
        >
    </div>
</div>

<style>
    

    .basic-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0 0 7px rgba(0, 0, 0, 0.05);
        border: 1.3px solid var(--outer-border-color);
        margin: 0.2rem 0rem;
    }

    @media (min-width: 500px) {
        .basic-block {
            margin: 5px 20px 5px 5px;
        }
    }

    @media (max-width: 500px) {
        .basic-block {
            margin: 5px 5px 5px 5px;
        }
    }

    .main-controlls {
        /* flex-grow: 1;
        flex-shrink: 1; */
        background-color: var(--body-color);
        /* transform: scaleY(1);
        transition: all .5s ease-in-out; */
        user-select: none;
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        background-color: var(--body-color);
        transition: background-color 0.1s ease-in-out;
        padding: 1rem;
    }

    .top-bar {
        display: flex;
        flex-direction: row;
        background-color: var(--heading-color);
        border-bottom: 1.3px solid var(--inner-border-color);
        justify-content: space-between;
        padding: 5px 10px;
        padding-right: 13px;
    }

    select {
        /* margin: 0.5rem; */
        margin-bottom: 1rem;
        border: 1.5px solid var(--inner-border-color);
        background-color: var(--display-color);
        color: var(--text-color);
    }

    .warning {
        color: red;
        margin-bottom: 1rem;
    }
</style>
