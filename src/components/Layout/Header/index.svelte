<script>
  // Importing header types
  import DefaultHeader from "./types/DefaultHeader.svelte";
  import StudioHeader from "./types/StudioHeader.svelte";

  // Exporting some variables
  export let page;
  export let type = "default";
</script>

<!-- Component's Layout -->
{ #if type == "default" }
  <DefaultHeader page={page} />
{ :else if type == "studio" }
  <StudioHeader page={page} />
{ /if }