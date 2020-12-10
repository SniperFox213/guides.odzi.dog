<script>
  // Importing modules
  import profile from "../../stores/profile.js";
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";

  // Importing components
  import Header from "../../components/Layout/Header/index.svelte";

  // onMount event
  onMount(() => {
    // Let's now check if we have any logged in user.
    if ($profile.id == 0 || $profile.id == null) {
      goto('/');
    };
  });
</script>

<!-- Main Application Window -->
<main class="w-full h-full relative">
  <!-- Header -->
  <Header type="studio" />
</main>