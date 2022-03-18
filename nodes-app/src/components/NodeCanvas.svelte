<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import { CanvasControls } from "../interfaces";

  export let controls: CanvasControls;
  export let width: number = 800;
  export let height: number = 600;

  let w;
  let h;

  onMount(() => {});
  afterUpdate(() => {});
</script>

<section>
  <svg class="canvas" {width} {height}>
    <!-- background grid -->
    <g class="grid">
      {#each { length: 100 } as _, i}
        {#each { length: 100 } as _, j}
          <circle cx={i * 10} cy={j * 10} r="1" fill="#ddd" />
        {/each}
      {/each}
    </g>

    <!-- main nodes content -->
    <g class="content" />

    <!-- mini zoom viewer -->
    <g class="viewfinder" />
  </svg>
</section>

<style>
  svg.canvas {
    border: solid 1px black;
  }
</style>
