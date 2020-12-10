<script>
	// Declaring variables

	// @variable loaded
	// Determines if the component is loaded
	// or no (required for transition to work)
	let loaded = false;
	
	// Importing animations
	import { fade, slide } from "svelte/transition";
	import { onMount } from "svelte";

	import { goto } from "@sapper/app";

	// Importing components
  import Header from "../components/Layout/Header/index.svelte";

	import GuideCard from "../components/guideCard.svelte";
  import SmallCard from "../components/landing/smallCard.svelte";

	// Importing stores
	import profile from "../stores/profile.js";

	// Importing icons

	// Let's now change our loaded state on component mount.
	onMount(() => {
		setTimeout(() => {
			loaded = true;
		}, 25);
	});
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Caveat&family=Manrope:wght@300;400;500;600&display=swap');
</style>

{#if loaded}
	<main in:fade style="font-family: 'Manrope', sans-serif;" class="bg-gray-100 w-full relative">
    <!-- Main -->
    <main class="h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">
      <!-- Title -->
      <Header page="index" />

      <!-- Library -->
      <div class="flex flex-wrap w-full">
        <!-- Main Course -->
        <div class="w-1/3 relative pr-2 py-2">
          <div style="padding-top: 125%" class="w-full relative">
            <div class="transition duration-200 ease-in-out cursor-pointer absolute inset-0 w-full h-full bg-gray-900 rounded-md shadow-lg flex flex-col justify-center items-center transform hover:scale-105 hover:border-2 hover:border-pink-400">
              <!-- Illustration -->
              <img style="height: 20rem" src="./icons/dog_colour.svg" alt="">

              <!-- Texts -->
              <div class="px-4 md:px-8 lg:px-12">
                <!-- Type -->
                <p class="text-sm text-gray-600">Курс обучения</p>

                <h1 class="text-2xl text-white font-medium">Новая собака: что делать после покупки щенка?</h1>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Courses and so on -->
        <div class="w-2/3 h-full">
          <div class="w-full h-full relative flex flex-wrap">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </div>
      </div>
    </main>

	</main>
{/if}