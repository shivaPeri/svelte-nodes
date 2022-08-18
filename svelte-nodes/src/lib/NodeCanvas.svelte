<script lang="ts">
  import { onMount } from "svelte";
  import * as d3 from "d3";
</script>

<svg>
  <slot />
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
  }
</style>
