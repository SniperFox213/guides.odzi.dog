<script>
  // Importing badge's variations
  import DefaultBadge from "./types/DefaultBadge.svelte";

  // Exporting some variables
  export let type = "default";
  export let textColor = "black";
  export let backgroundColor = "white";

  export let classes;
</script>

{ #if type == "default" }
  <DefaultBadge options={{ classes, textColor, backgroundColor }}>
    <slot></slot> 
  </DefaultBadge>
{ /if }