<script>
  // Importing modules
  import { goto } from "@sapper/app";
  import profile from "../../../../stores/profile.js";
  import { fade, slide } from "svelte/transition";

  // Importing components
  import Divider from "../../../Extra/Divider.svelte";
  import Badge from "../../../Badge/index.svelte";
  import UserIcon from "../components/UserIcon.svelte";

  let dashpage = null;

  let pages = [
    {
      id: "index",
      href: "/",
      color: "indigo-400",

      icon: "house.png",
      name: "Главная",
      description: "На главной странице вы сможете найти все самые популярные материалы на сайте."
    },
    {
      id: "library",
      href: "/library",
      color: "purple-400",

      icon: "books.png",
      name: "Библиотека",
      description: "Тут вы сможете найти абсолютно всё, что добавили сюда наши пользователи. Гайды, статьи, ответы на вопросы - всё тут!"
    },
    {
      id: "studio",
      href: "/studio",
      color: "green-400",

      icon: "writing-hand.png",
      name: "Студия",
      description: "Тут вы сможете создать новую ну или же отредактировать существующую статью, гайд или ответ на вопрос."
    },
    {
      id: "help",
      href: "/help",
      color: "red-400",

      icon: "information.png",
      name: "Помощь",
      description: "Воспользуйтесь Интерактивным поиском, который поможет найти ответ на вашу проблему."
    },
    {
      id: "",
      href: "#"
    },
    {
      id: "",
      href: "#"
    }
  ];

  // Exporting some variables
  export let page;
</script>

<header style="z-index: 999; height: 8vh; z-index: 3;" class="fixed border-b-1 border-gray-200 inset-x-0 top-0 w-full bg-white flex justify-between items-center px-6">
  <!-- Logotype -->
  { #if dashpage == null }
    <slot name="left">
      <div transition:fade style="z-index: 2;">
        <img style="height: 1.4rem;" src="./logotype/odzi-guides-black.svg" />
      </div>
    </slot>
  { /if }

  <!-- HeaderMenu Icon -->
  <div in:fade style="height: 8vh; z-index: 1;" class="absolute inset-0 w-full flex justify-center items-center">
    <button on:click={(e) => {
      if (dashpage == null) {
        dashpage = "dashboard";
      } else {
        dashpage = null;
      };
    }} class="transition duration-200 ease-in-out transform p-2 rounded-md bg-white text-black hover:bg-pink-400 hover:text-white hover:shadow-md hover:scale-105">
      { #if dashpage == null }  
        <svg in:fade style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      { :else }
        <svg in:fade style="width: 1.rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
      { /if }
    </button>
  </div>

  { #if dashpage == null }
    <!-- Account -->
    <div transition:fade style="z-index: 1;">
      <UserIcon on:open={(e) => {
        dashpage = "user";
      }} />
    </div>
  { /if }
</header>

{ #if dashpage != null }
  <div transition:fade="{{ duration: 400 }}" style="z-index: 1;" class="fixed inset-0 w-full h-full bg-black"></div>
  
  <div transition:slide="{{ duration: 650 }}" style="z-index: 2;" class="fixed inset-0 w-full h-full bg-white pt-12 flex">
    { #if dashpage == "dashboard" }
      <!-- Service-Related -->
      <div class="w-3/4 h-full flex flex-col">
        <!-- Header -->
        <div class="w-full flex justify-evenly items-center py-4">
          <!-- Links -->
          <button in:fade class="text-medium text-md text-gray-900">
            Путеводитель
          </button>

          <button in:fade class="text-sm text-gray-900 opacity-50">
            Сервисы
          </button>

          <button in:fade class="text-sm text-gray-900 opacity-50">
            Материалы
          </button>

          <button in:fade class="text-sm text-gray-900 opacity-50">
            Мои Питомцы
          </button>

          <button in:fade class="text-sm text-gray-900 opacity-50 flex items-center">
            <!-- Icon -->
            <svg style="width: 0.8rem; height: 0.8rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>

            <!-- Text -->
            <p class="ml-1">Помощь</p>
          </button>
        </div>

        <!-- Items -->
        <div class="w-full flex-grow flex flex-wrap relative">
          <!-- Item-Card -->
          { #each pages as p }
            <div in:fade class="w-1/3 h-1/2 p-3 relative">
              <div on:click={(e) => {
                if (p.id != page) {
                  goto(p.href);
                };
              }} class="transition duration-200 ease-in-out transform relative w-full h-full rounded-md { p.id == page ? `cursor-not-allowed bg-${p.color} border-2 border-pink-400` : `cursor-pointer bg-gray-900 hover:scale-105 hover:bg-${p.color}` } flex flex-col justify-center items-center">
                { #if p.icon != null && p.name != null && p.description != null }
                  <!-- Icon -->
                  <img style="height: 4rem; width: 4rem;" src="./icons/{ p.icon }" />

                  <!-- Texts -->
                  <div class="mt-4 text-center px-3">
                    <h1 class="text-2xl text-white font-medium">{ p.name }</h1>
                    <p class="text-base text-gray-100">{ p.description }</p>
                  </div>
                { /if }

                <!-- Badges -->
                { #if page == p.id }
                  <div class="absolute right-0 top-0 px-2 py-1">
                    <Badge classes="text-xs" textColor="white" backgroundColor="pink-400">
                      Вы тут
                    </Badge>
                  </div>
                { /if }
              </div>
            </div>
          { /each }
        </div>
      </div>

      <!-- Account-Related -->
      <div class="h-full w-1/4 border-1 border-gray-200 flex flex-col">
        <!-- User Avatar -->
        <div in:fade class="w-full px-6 py-6 flex justify-center items-center">
          <img class="rounded-full border-1 border-pink-400" style="width: 3.5rem; height: 3.5rem;" src="{ $profile.avatar }" />
        
          <!-- Texts -->
          <div class="mx-4">
            <h1 class="text-md text-black font-medium">{ $profile.displayName }</h1>
            <p class="text-sm text-gray-800">{ $profile.email }</p>
          </div>
        </div>

        <!-- Account Buttons -->
        <div style="overflow-y: auto;" class="w-full flex-grow relative">
          <div class="absolute w-full h-auto px-5">
            <!-- Activity Button -->
            <button in:fade class="my-3 w-full relative flex justify-start items-center p-3 rounded-md border-1 border-gray-200">
              <!-- Icon -->
              <span class="p-2 text-gray-100 bg-indigo-400 rounded-md">
                <svg style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </span>

              <!-- Texts -->
              <div class="ml-3 text-left">
                <h1 class="text-base text-black">Активность</h1>
                <p class="text-gray-800 text-xs">Какие уроки прошли, куда ходили и подобное.</p>
              </div>

              <!-- Badges -->
              <div class="absolute right-0 top-0 px-1">
                <Badge classes="text-extra-xs opacity-50" backgroundColor="indigo-400" textColor="white">
                  Питомцу
                </Badge>
              </div>
            </button>

            <!-- Activity Button -->
            <button in:fade class="my-3 w-full relative flex justify-start items-center p-3 rounded-md border-1 border-gray-200">
              <!-- Icon -->
              <span class="p-2 text-gray-100 bg-yellow-400 rounded-md">
                <svg style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </span>

              <!-- Texts -->
              <div class="ml-3 text-left">
                <h1 class="text-base text-black">Курсы</h1>
                <p class="text-gray-800 text-xs">Список всех курсов, на которые записанны ваши питомцы.</p>
              </div>

              <!-- Badges -->
              <div class="absolute right-0 top-0 px-1">
                <Badge classes="text-extra-xs opacity-50" backgroundColor="yellow-400" textColor="white">
                  Питомцу
                </Badge>
              </div>
            </button>

            <!-- Divider -->
            <Divider type="vertical" color="gray-200" margin="y-4" />

            <!-- Studio Button -->
            <button in:fade class="my-3 w-full relative flex justify-start items-center p-3 rounded-md border-1 border-gray-200">
              <!-- Icon -->
              <span class="p-2 text-gray-100 bg-purple-400 rounded-md">
                <svg style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
              </span>

              <!-- Texts -->
              <div class="ml-3 text-left">
                <h1 class="text-base text-black">Студия</h1>
                <p class="text-gray-800 text-xs">Создавайте новые Гайды, Статьи и редактируйте уже существующие.</p>
              </div>

              <!-- Badges -->
              <div class="absolute right-0 top-0 px-1">
                <Badge classes="text-extra-xs opacity-50" backgroundColor="purple-400" textColor="white">
                  Вам
                </Badge>
              </div>
            </button>

            <!-- Account Settings -->
            <button in:fade class="my-3 w-full relative flex justify-start items-center p-3 rounded-md border-1 border-gray-200">
              <!-- Icon -->
              <span class="p-2 text-gray-100 bg-green-400 rounded-md">
                <svg style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </span>

              <!-- Texts -->
              <div class="ml-3 text-left">
                <h1 class="text-base text-black">Настройки Аккаунта</h1>
                <p class="text-gray-800 text-xs">Всё, что связанно именно с Вашим аккаунтом.</p>
              </div>

              <!-- Badges -->
              <div class="absolute right-0 top-0 px-1">
                <Badge classes="text-extra-xs opacity-50" backgroundColor="green-400" textColor="white">
                  Вам
                </Badge>
              </div>
            </button>

            <!-- Logout -->
            <button in:fade class="my-3 w-full relative flex justify-start items-center p-3 rounded-md border-1 border-gray-200">
              <!-- Icon -->
              <span class="p-2 text-gray-100 bg-red-400 rounded-md">
                <svg style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              </span>

              <!-- Texts -->
              <div class="ml-3 text-left">
                <h1 class="text-base text-black">Выйти</h1>
                <p class="text-gray-800 text-xs">Выйти с Вашего аккаунта с текущего устройства.</p>
              </div>
            </button>
          </div>          
        </div>
      </div>
    { :else if dashpage == "user" }
      <!-- else content here -->
      <p>User Here</p>
    { /if }
  </div>
{ /if }