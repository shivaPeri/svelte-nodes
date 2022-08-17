<script lang="ts">
  import NodeCanvas from "./lib/NodeCanvas.svelte";
  import Node from "./lib/Node.svelte";
</script>

<main>
  <h1>test</h1>

  <div style="width: 1000px; height: 1000px;">
    <NodeCanvas>
      <Node x={100} y={100}>
        <h3>test</h3>
      </Node>

      <Node x={150} y={100}>
        <h3>test2</h3>
        <div>
          hello word this is Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Magnam laborum sint eius dolor voluptatem. Temporibus adipisci
          cupiditate, blanditiis sit quidem itaque amet natus dolorum modi
          ratione. Asperiores, facilis hic. Praesentium.
        </div>
      </Node>
    </NodeCanvas>
  </div>
</main>
