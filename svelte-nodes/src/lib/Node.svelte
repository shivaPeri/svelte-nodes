<script lang="ts">
  import type { NodeInterface } from "./interface";

  export let node: NodeInterface;
</script>

<g x={node.coord.x} y={node.coord.y}>
  <foreignObject width={"100%"} height={"100%"}>
    <slot />
  </foreignObject>
</g>

<style>
  foreignObject {
    border: 1px solid black;
  }
</style>
