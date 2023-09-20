<script>
  export let colorMode;
  export let redGreen;
</script>


<button
  class="{redGreen
    ? $colorMode
      ? 'cyan text-cyan-500 hover:text-cyan-400 border-cyan-500 bg-cyan-990 hover:bg-cyan-900'
      : 'cyan text-cyan-500 bg-cyan-100 border-cyan-500'
    : $colorMode
      ? 'red text-red-500 hover:text-red-400 border-red-500 bg-red-990 hover:bg-red-900'
      : 'red text-red-500 bg-red-100 border-red-500'} 
    text-s font-medium my-2 ml-2 border-2 border-opacity-50 rounded-sm px-4 py-1 button"
>
  <slot />
</button>


<style>

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
