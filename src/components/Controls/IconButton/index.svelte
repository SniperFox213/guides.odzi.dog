<script>
  // And now let's import different IconButton types
  import Default from "./types/DefaultIconButton.svelte";

  // Let's now export some needed variables
  export let type = "default";

  export let iconColor = "black";
  export let hIconColor = "white";

  export let backgroundColor = "white";
  export let hBackgroundColor = "green-300";

  export let classes = "";
</script>

{ #if type == "default" }
  <Default on:click options={{ iconColor, hIconColor, backgroundColor, hBackgroundColor, classes }} >
    <slot></slot>
  </Default>
{ /if }

