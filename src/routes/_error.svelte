<script>
  // Importing modules
  import { goto } from "@sapper/app";

  // Importing components
  import Header from "../components/Layout/Header/index.svelte";
  import Button from "../components/Controls/Button/index.svelte";

	export let error;
	export let status;
</script>

<!-- Main Window -->
<main class="w-full h-screen flex justify-center items-center bg-gray-200">
  <!-- Header -->
  <Header />

  <!-- Container -->
  <div class="text-center">
    <!-- Texts -->
    <h1 class="text-md font-medium">{status}</h1>
    <p class="text-sm text-gray-700">{error.message}</p>

    <!-- Button -->
    <div class="mt-4">
      <Button hTextColor="white" hBackgroundColor="pink-400" on:click={(e) => {
        goto('/');
      }}>
        На главную
      </Button>
    </div>
  </div>
</main>