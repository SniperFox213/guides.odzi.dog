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

	// Importing stores
	import profile from "../stores/profile.js";

	// Importing icons

	let results = [
		{
			title: "Почему моя собака икает после еды?",
			description: "Ваш щенок/пёс икает после того, как покушал?",

			type: "answer",

			solutions: [

			],

			author: {
				avatar: "https://lh3.googleusercontent.com/a-/AOh14GhGDpOQbtDd97mLGUnsy49Y9idmSK_rk6rxJeu7nA=s96-c",

				approved: true,
				rank: "Кинолог",

				displayName: "Juiipup"
			},

			views: 100,
			likes: 50,

			verified: true
		},
		{
			title: "Причины икоты у собак",
			description: "Почему именно - с биологической точки зрения - собаки икают?",

			type: "article",

			solutions: [

			],

			author: {
				avatar: "https://lh3.googleusercontent.com/a-/AOh14GhGDpOQbtDd97mLGUnsy49Y9idmSK_rk6rxJeu7nA=s96-c",

				approved: true,
				rank: "Кинолог",

				displayName: "Juiipup"
			},

			views: 100,
			likes: 50,

			verified: true
		},
		{
			title: "Как правильно кормить вашего питомца",
			description: "Тут вы сможете узнать как кормить питомца! А так же вы сможете пройти небольшой тест, который скажет когда, сколько и как нужно кормить именно вашего питомца!",

			type: "guide",

			solutions: [

			],

			author: {
				avatar: "https://lh3.googleusercontent.com/a-/AOh14GhGDpOQbtDd97mLGUnsy49Y9idmSK_rk6rxJeu7nA=s96-c",

				approved: true,
				rank: "Кинолог",

				displayName: "Juiipup"
			},

			views: 100,
			likes: 50,

			verified: true
		},
		{
			title: "Что нельзя давать собаке в качестве еды",
			description: "Что нельзя а что можно - заядлый вопрос, на который отвечает данная статья!",

			type: "article",

			solutions: [

			],

			author: {
				avatar: "https://lh3.googleusercontent.com/a-/AOh14GhGDpOQbtDd97mLGUnsy49Y9idmSK_rk6rxJeu7nA=s96-c",

				approved: true,
				rank: "Кинолог",

				displayName: "Juiipup"
			},

			views: 100,
			likes: 50,

			verified: true
		},
	];

	let scrollY;

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

<svelte:window bind:scrollY={scrollY} />

{#if loaded}
	<main in:fade style="font-family: 'Manrope', sans-serif;" class="bg-gray-100 w-full relative">
		<!-- Header -->
		<header class="fixed inset-x-0 top-0 w-full py-2 bg-black flex items-center justify-between px-6">
			<!-- Logotype -->
			<div class="w-1/4">
				<img style="height: 2rem;" src="./logotype/odzi-guides-white.svg" alt="odzi.guides logotype">
			</div>

			<!-- Search box -->
			<div class="w-2/4 flex justify-between rounded-lg bg-white border-1 border-gray-100 shadow-lg pl-6 pr-2 py-1">
				<div class="flex items-center">
					<!-- Search icon -->
					<span style="height: 1.5rem; width: 1.5rem;" class="text-gray-600">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
					</span>

					<!-- Input itself -->
					<input class="ml-3 w-full" placeholder="Искать..." type="text">
				</div>

				<!-- Search Button -->
				<button class="transition duration-300 ease-in-out py-1 px-4 rounded-md text-sm bg-pink-400 text-white hover:bg-pink-300 hover:shadow-md">
					Искать
				</button>
			</div>

			<!-- Account + Dogs Accounts -->
			<div class="flex items-center justify-end w-1/4">

				{ #if $profile.id != 0 }
					<!-- Dog Accounts -->
					<button class="w-8 h-8 rounded-full flex items-center justify-center bg-white">
						<img style="height: 1.1rem; width: 1.1rem;" src="./icons/dog.png" alt="Dog Icon">
					</button>

					<!-- Divider -->
					<div style="height: 1.6rem; width: 1px;" class="rounded-lg bg-gray-600 mx-2"></div>

					<!-- Avatar -->
					<img class="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/a-/AOh14GhGDpOQbtDd97mLGUnsy49Y9idmSK_rk6rxJeu7nA=s96-c" alt="User Avatar">
				{ :else }
					<button on:click={(e) => {
						goto("https://authed.unfull.ml/callback?url=http://localhost:3000/authorize/:token");
					}} class="transition duration-300 ease-in-out py-1 px-4 rounded-md text-sm bg-white text-gray-800 hover:bg-gray-200 hover:text-black hover:shadow-md">
						Авторизоваться
					</button>
				{ /if }
			</div>
		</header>

		<!-- Search Section -->
		<section class="w-full pt-16">
			<!-- Search box -->
			<div class="w-full flex justify-center items-center">
			</div>

			<!-- Current Search -->
			<div class="w-full text-center mt-16 pt-6 bg-white">
				<!-- heading -->
				<h1 class="text-3xl text-black font-semibold">Собака икает после еды</h1>
			
				<!-- Information -->
				<div>
					<h2 class="text-sm text-gray-700">Найденно 4 статьи</h2>
				</div>
			</div>

			<!-- Search Parameters -->
			<div class="w-full flex justify-between pt-8 bg-white px-6">
				<!-- Popularity Sorting -->
				<button class="transition duration-300 ease-in-out py-2 px-4 flex items-center rounded-md text-sm bg-white border-1 border-gray-200 text-gray-700 focus:outline-none hover:text-black hover:border-2 hover:border-pink-400 hover:shadow-md">
					<!-- Text -->
					<p>Популярные</p>

					<!-- Icon -->
					<span class="ml-2">
						<svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</span>
				</button>

				<!-- Other Filters -->
				<button class="transition duration-300 ease-in-out py-2 px-4 flex items-center rounded-md text-sm bg-white border-1 border-gray-200 text-gray-700 hover:text-black hover:border-2 hover:border-pink-400 hover:shadow-md">
					<!-- Icon -->
					<span class="mr-2">
						<svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
					</span>

					<!-- Text -->
					<p>Фильтры</p>
				</button>
			</div>
		</section>

		<!-- Results Section -->
		<section class="w-full relative flex justify-center flex-wrap py-12 bg-white">
			<!-- Result Entry -->
			{ #each results as result }
				<GuideCard guide={result} />
			{ /each }
		</section>
	</main>
{/if}