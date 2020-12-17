<script>
  // Let's now import different types of
  // ActionButtons
  import Tiny from "./types/TinyActionButton.svelte";
  // import Medium from "./Types/MediumActionButton.svelte";

  // And now let's export some variables
  export let type = "tiny";
  
  export let hovered;
  export let active = false;

  export let height = "1/2";
  export let width = "1/2";

  export let textColor = "white";
  export let hTextColor = "white";

  export let backgroundColor = "gray-900";
  export let hBackgroundColor = "green-300";

  export let classes = "";
</script>

{ #if type == "tiny" }
  <Tiny on:click bind:hovered={hovered} options={{ classes, height, width, active, textColor, hTextColor, backgroundColor, hBackgroundColor }}>
    <slot hovered={hovered}></slot>
  </Tiny>
{ /if }