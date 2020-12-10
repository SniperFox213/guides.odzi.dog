<script>
  // Importing badge's variations
  import DefaultBadge from "./types/DefaultBadge.svelte";

  // Exporting some variables
  export let type = "default";

  export let classes;
</script>

{ #if type == "default" }
  <DefaultBadge options={{ classes }}>
    <slot></slot> 
  </DefaultBadge>
{ /if }