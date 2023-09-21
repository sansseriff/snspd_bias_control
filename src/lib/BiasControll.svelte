<script lang="ts" context="module">
    import "../app.css";
</script>

<script lang="ts">
    import LightDarkToggle from "../lib/LightDarkToggle.svelte";
    import Hamburger from "../lib/Hamburger.svelte";
    import { colorMode } from "../stores/lightdark";
    import Menu from "./Menu.svelte";
    import Button from "./Button.svelte";
    import ChevButtonTop from "./ChevButtonTop.svelte";
    import ChevButtonBottom from "./ChevButtonBottom.svelte";

    let showDropdown = false;
    function toggleMenu() {
        showDropdown = !showDropdown;
    }

    export let number;

    let toggle_up = false;
    let toggle_down = true;

    let alter = false;
    let no_border = false;

    function togglerRotateState() {
        toggle_up = !toggle_up;
        toggle_down = !toggle_down;
        alter = !alter;
        no_border = !no_border;
    }

    let isEditing = false;
    let headingText = "";

    function startEditing() {
        isEditing = true;
    }

    function stopEditing() {
        isEditing = false;
    }

    function handleInput(event) {
        headingText = event.target.value;
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            stopEditing();
        }
    }
</script>

<div class="bound-box">
    <div class="top-bar" class:no_border>
        <div class="top-left">
            <h1 class="heading">{number}</h1>
            {#if isEditing}
                <input
                    class="heading-input"
                    type="text"
                    value={headingText}
                    on:input={handleInput}
                    on:blur={stopEditing}
                    on:keydown={handleKeyDown}
                    tabindex="0"
                    autofocus
                />
            {:else}
                <h1
                    class="heading-label"
                    on:click={startEditing}
                    on:keydown={handleKeyDown}
                >
                    {headingText}
                </h1>
            {/if}
        </div>
        <div class="top-right">
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
            <!-- here, class:something is a special svelte way of pointing to a class which may be toggled. It is a shorthand for class:something={something} -->
            <!-- where 'something' is both a boolean in javascript and a class -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                stroke="currentColor"
                class="chevron"
                class:toggle_up
                class:toggle_down
                viewBox="0 0 16 16"
                on:click={togglerRotateState}
                on:keydown={togglerRotateState}
            >
                <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    stroke-width="0.8"
                />
            </svg>
        </div>
    </div>
    <!-- <div class="thing rotate rotate-down">sdfsdf</div> -->

    <div class="main-controlls" class:alter>
        <div class="left">
            <!-- <div class="button-box"> -->
            <Button redGreen={true} {colorMode}>Turn On</Button>
            <input type="text" />
            <Button redGreen={false} {colorMode}>Submit</Button>
            <!-- </div> -->
        </div>

        <div class="right">
            <div class="plus-minus">+</div>
            <div class="controls">
                <div class="buttons-top">
                    <ChevButtonTop />
                    <div class="spacer-chev" />
                    <ChevButtonTop />
                    <div class="spacer-chev" />
                    <ChevButtonTop />
                    <div class="spacer-chev" />
                    <ChevButtonTop />
                </div>

                <div class="display">
                    <div class="digit">0</div>
                    <div class="short-spacer" />
                    <div class="digit dot">.</div>
                    <div class="short-spacer" />
                    <div class="digit">0</div>
                    <div class="spacer" />
                    <div class="digit">0</div>
                    <div class="spacer" />
                    <div class="digit">0</div>
                </div>

                <div class="buttons-bottom">
                    <ChevButtonBottom />
                    <div class="spacer-chev" />
                    <ChevButtonBottom />
                    <div class="spacer-chev" />
                    <ChevButtonBottom />
                    <div class="spacer-chev" />
                    <ChevButtonBottom />
                </div>
            </div>
            <div class="voltage">V</div>
        </div>
    </div>
</div>

<style>
    /* @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,400;8..144,500&display=swap'); */
    /* @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap'); */
    @import url("https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700&display=swap");


    .top-left {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* padding: 5px 10px;
        padding-right: 13px; */
    }

    .top-right {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* padding: 5px 10px;
        padding-right: 13px; */
    }

    .heading-input {
        color: var(--text-color);
        font-size: 1.2rem;
        letter-spacing: 0rem;
        /* padding: 0.7rem 0.0rem; */
        padding-right: 2rem;
        /* padding: 0.0rem 0.5rem; */
        /* padding: 0; */
    }
    .heading {
        /* flex-shrink: 1;
        margin-right: 0; */
        /* display: block; */
        /* width: 50px; */
        padding: 0.0rem 0rem;
        padding-right: 0.8rem;
        opacity: 0.5;
    }

    .heading-label {
        min-width: 230px;
        padding-right: 0rem;
        padding: 0.01rem 0.5rem;
        border-radius: 0.2rem;
        border: 1.5px solid var(--heading-color);
    }

    .heading-label:hover {
        background-color: var(--hover-heading-color);
        border: 1.5px solid var(--inner-border-color);
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
    }

    .digit {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--digits-color);
        font-family: "Roboto Flex", sans-serif;
        font-weight: 300;
        font-size: 1.7rem;
    }

    .dot {
        margin-left: -0.03rem;
        margin-right: -0.03rem;
    }

    .button-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0.75rem;
    }

    .display {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* padding: 5px 10px;
        padding-right: 13px; */
        background-color: var(--display-color);
        border-radius: 4px;
        border: 1.5px solid var(--inner-border-color);
        padding: 0rem 0.44rem;
        transition: background-color 0.1s ease-in-out;
    }

    .spacer {
        width: 0.8rem;
    }

    .spacer-chev {
        width: 0.2rem;
    }

    .short-spacer {
        width: 0rem;
    }

    .buttons-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* margin-bottom: 0.2rem; */
        padding-bottom: 0.5rem;
    }

    .buttons-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* margin-top: 0.2rem; */
        padding-top: 0.5rem;
    }

    .controls {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* padding: 0.5rem 0.3rem;
        margin: 0.3rem 0.3rem; */
        /* padding: 10px 10px; */
        /* padding-right: 13px; */
    }

    .voltage {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--icon-color);
        font-family: "Roboto Flex", sans-serif;
        font-weight: 400;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 0.3rem;
        margin-right: 0.3rem;
    }

    .plus-minus {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--icon-color);
        font-family: "Roboto Flex", sans-serif;
        font-weight: 300;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
    }

    .right {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem 1rem;
        padding-left: 0.4rem;

        /* flex: 10; */
        /* padding-right: 13px; */
    }

    .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem 1rem;
        padding-right: 0.4rem;
        width: 47%;
        /* flex: 1; */
        /* padding-right: 13px; */
    }

    .toggle_up {
        transform: rotate(90deg);
        transition: transform 0.2s ease-in-out;
    }

    .toggle_down {
        transform: rotate(0);
        transition: transform 0.2s ease-in-out;
    }

    .chevron {
        padding-top: 3px;
        color: var(--icon-color);
    }

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
        justify-content: space-between;
        padding: 5px 10px;
        padding-right: 13px;
    }

    .heading {
        margin-right: auto;
        margin-top: auto;
        margin-bottom: auto;

        /* padding-left: 8px;
        padding-right: 13px;
        padding-top: 5px;
        padding-bottom: 5px; */
        color: var(--text-color);
    }

    .dot-menu {
        padding: 0px 12px;
        padding-top: 3px;
        color: var(--icon-color);
    }

    .dot-menu:hover {
        cursor: pointer;
    }

    .main-controlls {
        /* flex-grow: 1; */
        /* flex-shrink: 1; */
        background-color: var(--body-color);
        /* transform: scaleY(1);
        transition: all .5s ease-in-out; */
        user-select: none;
        display: flex;
        flex-direction: row;
        /* justify-content: space-between; */
        background-color: var(--body-color);
        transition: background-color 0.1s ease-in-out;
    }

    .alter {
        /* transform: scaleY(0);
        transition: all .5s ease-in-out; */
        display: none;
    }

    .no_border {
        border: none;
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
