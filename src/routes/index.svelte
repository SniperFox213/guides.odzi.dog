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
      <div class="w-full flex items-center justify-between py-4">
        <h1 class="text-3xl font-medium text-black">Исследовать</h1>
        
        <!-- Some Links -->
        <div class="flex items-center">
          <div class="mr-6 text-xs opacity-75">
            <a class="mx-2" href="/">Главная</a>
            <a class="mx-2" href="/courses">Мои курсы</a>
            <a class="mx-2" href="/library">Библиотека</a>
            <a class="mx-2" href="https://odzi.dog">odzi.dog</a>
          </div>

          { #if $profile.id != 0 }
            <!-- Dog Accounts -->
            <button class="w-8 h-8 border-1 border-solid border-pink-400 rounded-full flex items-center justify-center bg-white">
              <img style="height: 1.1rem; width: 1.1rem;" src="./icons/dog.png" alt="Dog Icon">
            </button>

            <!-- Divider -->
            <div style="height: 1.6rem; width: 1px;" class="rounded-lg bg-gray-600 mx-2"></div>

            <!-- Avatar -->
            <img class="w-8 h-8 border-1 border-gray-100 border-solid rounded-full" src="https://lh3.googleusercontent.com/a-/AOh14GhGDpOQbtDd97mLGUnsy49Y9idmSK_rk6rxJeu7nA=s96-c" alt="User Avatar">
          { :else }
            <button on:click={(e) => {
              goto("https://authed.unfull.ml/callback?url=https://guides.odzi.dog/authorize/:token");
            }} class="transition duration-300 ease-in-out py-1 px-4 rounded-md text-sm bg-white text-gray-800 hover:bg-gray-200 hover:text-black hover:shadow-md">
              Авторизоваться
            </button>
          { /if }
        </div>
      </div>

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