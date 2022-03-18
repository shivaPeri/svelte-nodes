<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import Node from "./Node.svelte";
  import { defaultCanvasControls, defaultNode } from "../constants";
  import { CanvasControls } from "../interfaces";

  export let controls: CanvasControls = defaultCanvasControls;
  export let width: number = 800;
  export let height: number = 600;

  export let nodeData: any = [defaultNode];

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
    <g class="content">
      {#each nodeData as props, i}
        <Node {props} />
      {/each}
    </g>

    <!-- mini zoom viewer -->
    <g class="viewfinder" />
  </svg>
</section>

<style>
  svg.canvas {
    border: solid 1px black;
  }
</style>
