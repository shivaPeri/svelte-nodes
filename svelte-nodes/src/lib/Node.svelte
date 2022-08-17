<script lang="ts">
  export let x;
  export let y;
</script>

<g {x} {y}>
  <foreignObject {x} {y} width={100} height={200}>
    <slot />
  </foreignObject>
</g>

<style>
  foreignObject {
    border: 1px solid black;
  }
</style>
