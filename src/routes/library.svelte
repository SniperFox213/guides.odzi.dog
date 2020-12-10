<script>
  // Importing modules and stores
  import { goto } from "@sapper/app";
  import GuideCard from "../components/guideCard.svelte";

  import profile from "../stores/profile.js";

  // Importing components
  import Header from "../components/Layout/Header/index.svelte";

  import Button from "../components/Controls/Button/index.svelte";
  import Badge from "../components/Badge/index.svelte";

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
</script>

<main class="min-h-screen w-full bg-gray-100 relative">
  <!-- Header -->
  <Header page="library" />

  <!-- Hero-Tutorial -->
  <section style="background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="w-full pt-32 md:pt-0 pb-24 md:pb-0 h-auto md:h-screen flex justify-center items-center relative">
    <!-- Texts + Illustrations -->
    <div class="flex flex-col md:flex-row items-center relative px-4 md:px-16 lg:px-24">
      <!-- Illustration -->
      <div class="w-full md:w-3/5 px-8 h-full relative">

        <div class="pt-80per md:pt-50per relative w-full">
          <div data-tilt data-tilt-scale="1.05" data-tilt-reverse="true" data-tilt-reset="true" data-tilt-speed="800" class="absolute inset-0 w-full h-full bg-white rounded-lg shadow-md">
            
            <div class="w-full h-full flex flex-col justify-center items-center">
              <!-- Logotype -->
              <img style="height: 2rem;" src="./logotype/black-full.svg" alt="odzi.dog logotype">

              <!-- Some Texts -->
              <div class="mt-2 w-2/3 text-center">
                <p class="text-base text-gray-800"><span class="border-b-1 border-pink-400 border-solid">odzi.dog</span> - это сеть сервисов, которые были созданны обладателями собак, ветеринарами и зоопсихологами для людей и их питомцев.</p>
              </div>

              <!-- Buttons -->
              <div class="mt-3">
                <button class="transition duration-300 ease-in-out flex items-center py-1 px-2 rounded-md text-sm bg-pink-400 text-white hover:bg-pink-300 hover:text-white hover:shadow-md">
                  <!-- Text -->
                  <p class="text-sm mr-1">Перейти на odzi.dog</p>

                  <!-- Icon -->
                  <svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      
      </div>

      <!-- Text -->
      <div class="w-full mt-16 md:mt-0 md:w-2/5 md:ml-8 px-8 md:px-0 relative">
        <!-- Badge -->
        <Badge classes="text-extra-xs opacity-50">
          Знакомство с сервисом
        </Badge>

        <div class="mb-6 mt-2">
          <h1 class="text-2xl text-white font-medium">Что тут можно найти?</h1>
          <p class="text-base text-gray-100">odzi.guides, как вы уже поняли, - это один из сервисов odzi.dog. Данный сервис работает как огромный справочник и склад всеразличных уроков и статей. Тоесть тут вы сможете найти ответ почти что на любой ваш вопрос! Ну а что же делать если ответа вы не нашли? Вы всегда можете создать свою статью/гайд/ответ на этом сервисе! Весь контент на этом сервисе пишется пользователями и потом проверяется зоопсихологами и ветеринарами со всего мира!</p>
        </div>

        <!-- Buttons -->
        <div class="w-full flex justify-between">
          <Button type="ghost">
            Скрыть
          </Button>

          <Button>
            Дальше
          </Button>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="absolute inset-x-0 bottom-0 w-full flex justify-center items-center pb-8">
      <span class="cursor-not-allowed w-4 h-4 rounded-full bg-white mx-3"></span>
      <span class="cursor-pointer w-3 h-3 rounded-full border-2 border-white mx-3"></span>
      <span class="cursor-pointer w-3 h-3 rounded-full border-2 border-white mx-3"></span>
    </div>
  </section>

  <!-- Library itself -->
  <div class="w-full h-full pt-10">
    <!-- Mini-header -->
    <div class="w-full flex flex-col md:flex-row justify-between py-6 px-6 md:px-12">
      <!-- text -->
      <h1 class="text-2xl text-black font-bold text-center md:text-left">Библиотека</h1>

      <!-- Search Box -->
			<div class="w-full mt-8 md:mt-0 md:w-2/4 flex justify-between rounded-lg bg-white border-1 border-gray-100 shadow-lg pl-6 pr-2 py-2">
				<div class="flex items-center">
					<!-- Search icon -->
					<span style="height: 1.5rem; width: 1.5rem;" class="text-gray-600">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
					</span>

					<!-- Input itself -->
					<input class="ml-3 w-full" placeholder="Искать..." type="text">
				</div>

				<!-- Search Button -->
				<button class="hidden md:block transition duration-300 ease-in-out py-1 px-4 rounded-md text-sm bg-pink-400 text-white hover:bg-pink-300 hover:shadow-md">
					Искать
				</button>
			</div>
    </div>

    <!-- Library Topics -->

    <section class="mt-6 w-full md:px-6">
      <!-- Title -->
      <div class="px-6 text-left">
        <h1 class="text-xl opacity-75 text-black font-medium">Избранные курсы</h1>
        <p class="text-sm text-gray-700">Курсы, которые были избранны и рекомендованны Администрацией сайта.</p>
      </div>

      <div class="flex flex-wrap mt-6">
        { #each results as guide }
          <GuideCard guide={guide} />
        { /each }
      </div>
    </section>

  </div>
</main>