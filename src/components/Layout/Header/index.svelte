<script>
  // Importing header types
  import DefaultHeader from "./types/DefaultHeader.svelte";
  import StudioHeader from "./types/StudioHeader.svelte";

  // Exporting some variables
  export let page;
  export let type = "default";
</script>

<!-- Component's Layout -->
<header style="z-index: 999; height: 8vh;" class="fixed inset-x-0 top-0 w-full bg-white flex items-center justify-between px-6">
  { #if type == "default" }
    <DefaultHeader page={page} />
  { :else if type == "studio" }
    <StudioHeader page={page} />
  { /if }
</header>
