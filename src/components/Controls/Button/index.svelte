<script>
  // Importing component's variations
  import DefaultButton from "./types/DefaultButton.svelte";
  import GhostButton from "./types/GhostButton.svelte";

  import DropdownButton from "./types/DropdownButton.svelte";

  // Exporting some settings
  export let type = "default";

  // @applied for:
  // ghost button
  export let borderColor = "white";
  export let hBorderColor = "gray-200";

  // @applied for:
  // default button, ghost button
  export let textColor = type == "ghost" ? "white" : "gray-800";
  export let hTextColor = "black";

  // @applied for:
  // default button, ghost button
  export let backgroundColor = "white";
  export let hBackgroundColor = "gray-200";

  export let classes;

  export let hovered;
</script>

{ #if type == "default" }
  <DefaultButton on:click bind:hovered={hovered} options={{ textColor, hTextColor, backgroundColor, hBackgroundColor, classes }}>
    <slot></slot>
  </DefaultButton>
{ :else if type == "ghost" }
  <GhostButton on:click bind:hovered={hovered} options={{ borderColor, hBorderColor, textColor, hTextColor, hBackgroundColor, classes }}>
    <slot></slot>
  </GhostButton>
{ /if }