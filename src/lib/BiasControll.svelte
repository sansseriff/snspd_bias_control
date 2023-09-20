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

    export let number;

    let toggle_up = false;
    let toggle_down = true;


    function togglerRotateState() {
        toggle_up = !toggle_up;
        toggle_down = !toggle_down;
    }
</script>

<div class="bound-box">
    <div class="top-bar">
        <h1 class="heading">{number}</h1>
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
    <!-- <div class="thing rotate rotate-down">sdfsdf</div> -->

    <div class="button-bar">
        <Button redGreen={true} {colorMode}>All On</Button>
        <Button redGreen={false} {colorMode}>All Off</Button>
    </div>
</div>

<style>

    .toggle_up {
    transform: rotate(90deg);
    transition: transform 0.3s ease-in-out;
    }

    .toggle_down {
    transform: rotate(0);
    transition: transform 0.3s ease-in-out;
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
        border: 1px solid var(--outer-border-color);
    }
    .top-bar {
        display: flex;
        flex-direction: row;
        background-color: var(--heading-color);
        border-bottom: 1px solid var(--inner-border-color);
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

    .button-bar {
        flex-grow: 1;
        background-color: var(--body-color);
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
