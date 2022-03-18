<script lang="ts">
  export let props: any;
</script>

<g>
  <rect x={50} y={50} width={100} height={100} />
  <text x={50} y={50}>{props}</text>
</g>

<style>
  rect {
    border: solid 1px black;
  }
</style>
