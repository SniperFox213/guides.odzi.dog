<script>
  // Importing modules
  import { onMount } from "svelte";
  import { stores, goto } from "@sapper/app";
  import profile from "../../../../stores/profile.js";
  import settings from "../../../../stores/settings.js";
  import { fade, slide } from "svelte/transition";

  const { page } = stores();

  // Importing components
  import Divider from "../../../Extra/Divider.svelte";
  import Badge from "../../../Badge/index.svelte";
  import UserPopover from "../components/UserPopover.svelte";
  import Button from "../../../Controls/Button/index.svelte";

  import ActionButton from "../../../Controls/ActionButton/index.svelte";
  import IconButton from "../../../Controls/IconButton/index.svelte";

  let dashpage = null;
  let category = 0;

  let categories = [
    {
      id: 0,
      name: "Путеводитель"
    },
    {
      id: 1,
      name: "Сервисы"
    },
    {
      id: 2,
      name: "Материалы"
    },
    {
      id: 3,
      name: "Мои Питомцы"
    }
  ]

  let pages = [
    {
      id: "index",
      href: "/",
      color: "indigo-400",

      icon: "house.png",
      name: "Главная",
      description: "На главной странице вы сможете найти все самые популярные материалы на сайте.",
    },
    {
      id: "library",
      href: "/library",
      color: "purple-400",

      icon: "books.png",
      name: "Библиотека",
      description: "Тут вы сможете найти абсолютно всё, что добавили сюда наши пользователи. Гайды, статьи, ответы на вопросы - всё тут!",
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
      id: "",
      href: "#",
      // color: "red-400",

      // icon: "information.png",
      // name: "Помощь",
      // description: "Воспользуйтесь Интерактивным поиском, который поможет найти ответ на вашу проблему."
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

  onMount(() => {
    page.subscribe((obj) => {
      pages.forEach((p) => {
        if (obj.path == "/") {
          currentPage = "index";
        } else {
          if (p.href.includes(obj.path)) {
            currentPage = p.id;
          };
        };
      });
    });
  });

  // Exporting some variables
  let currentPage;
</script>

<header style="z-index: 999; height: 8vh;" class="fixed border-b-1 border-gray-200 inset-x-0 top-0 w-full bg-white flex justify-between items-center px-6">
  <!-- Logotype -->
  { #if dashpage == null }
    <slot name="left">
      <div on:click={(e) => {
        goto("/");
      }} transition:fade style="z-index: 2;" class="cursor-pointer">
        <img style="height: 1.4rem;" src="./logotype/odzi-guides-black.svg" alt="odzi.guidse logotype" />
      </div>
    </slot>
  { /if }

  <!-- HeaderMenu Icon -->
  { #if !$settings.minimalisticView }
    <div in:fade style="height: 8vh; z-index: 1;" class="absolute inset-0 w-full flex justify-center items-center">
      <IconButton on:click={(e) => {
        if (dashpage == null) {
          dashpage = "dashboard";
        } else {
          dashpage = null;
        };
      }}>
        { #if dashpage == null }  
          <svg in:fade style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        { :else }
          <svg in:fade style="width: 1.2rem; height: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
        { /if }
      </IconButton>
    </div>
  { /if }

  { #if dashpage == null }
    <!-- Account -->
    <div transition:fade style="z-index: 1;" class="flex items-center">
      <!-- Page Links -->
      { #if $settings.minimalisticView }
        <div class="hidden md:flex mr-2 text-sm text-black">
          { #each pages as p }
            { #if p.href != null && p.name != null }
              <a class="transition duration-200 ease-in-out transform mx-2 hover:scale-105 hover:opacity-100 opacity-75" href="{ p.href }">{ p.name }</a>
            { /if }
          { /each }
        </div>
      { /if }

      { #if $profile.id != 0 }
        { #if $settings.minimalisticView }
          <UserPopover />
        { :else }
          <button class="flex justify-center items-center">
            <img class="w-8 h-8 rounded-full border-1 border-solid border-gray-300" src="{ $profile.avatar }" alt="">
          </button>  
        { /if }
      { :else }
        <IconButton classes="flex items-center" on:click={(e) => {
          window.location.href = "https://authed.unfull.ml/callback?url=https://guides.odzi.dog/authorize/:token";
        }}>
          <svg style="height: 1.2rem; width: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
        
          <p class="text-sm ml-2">Авторизоваться</p>
        </IconButton>
      { /if }
    </div>
  { /if }
</header>

{ #if dashpage != null }
  <div transition:fade="{{ duration: 400 }}" style="z-index: 997;" class="fixed inset-0 w-full h-full bg-black"></div>
  
  <div transition:slide="{{ duration: 650 }}" style="z-index: 998;" class="fixed inset-0 w-full h-full bg-white pt-12 flex">
    { #if dashpage == "dashboard" }
      <!-- Service-Related -->
      <div class="w-3/4 h-full flex flex-col">
        <!-- Header -->
        <div class="w-full flex justify-evenly items-center py-4">
          <!-- Links -->
          { #each categories as cat }
            <button on:click={(e) => {
              category = cat.id;
            }} in:fade class="transition duration-200 ease-in-out { cat.id == category ? "text-md font-medium text-black" : "text-sm text-gray-900 opacity-50" }">
              { cat.name }
            </button>
          { /each }

          <button in:fade class="text-sm text-gray-900 opacity-50 flex items-center">
            <!-- Icon -->
            <svg style="width: 0.8rem; height: 0.8rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>

            <!-- Text -->
            <p class="ml-1">Помощь</p>
          </button>
        </div>

        { #if category == 0 }
          <!-- 
            Site's Pages
           -->
          <div class="w-full flex-grow relative">
            <div class="absolute w-full h-full flex flex-wrap">
              <!-- Item-Card -->
              { #each pages as p }
                <ActionButton on:click={(e) => {
                  dashpage = null;

                  goto(p.href);
                }} active={ currentPage == p.id ? true : false } width="1/3" height="1/2" type="tiny" let:hovered={ hovered } hBackgroundColor={ p.color }>
                  { #if p.icon != null && p.name != null && p.description != null }
                    <!-- Icon -->
                    <img class="{ hovered || currentPage == p.id ? "" : "mt-10" }" style="height: 4rem; width: 4rem;" src="./icons/{ p.icon }" alt="Tiny ActionButton Icon" />

                    <!-- Texts -->
                    <div class="mt-4 text-center px-3">
                      <h1 class="text-2xl text-white font-medium">{ p.name }</h1>
                      <p class="transition duration-200 ease-in-out { hovered || currentPage == p.id ? "opacity-100" : "opacity-0" } text-base text-gray-100">{ p.description }</p>
                    </div>
                  { /if }

                  <!-- Badges -->
                  { #if currentPage == p.id }
                    <div class="absolute right-0 top-0 px-2 py-1">
                      <Badge classes="text-xs" textColor="white" backgroundColor="{ p.color }">
                        Вы тут
                      </Badge>
                    </div>
                  { /if }
                </ActionButton>
              { /each }
            </div>
          </div>
        { /if }
      </div>

      <!-- Account-Related -->
      <div class="h-full w-1/4 border-1 border-gray-200 flex flex-col">
        <!-- User Avatar -->
        { #if $profile.id != 0 }
          <div in:fade class="w-full px-6 py-6 flex justify-center items-center">
            <img class="rounded-full border-1 border-pink-400" style="width: 3.5rem; height: 3.5rem;" src="{ $profile.avatar }" alt="Profile Avatar" />
          
            <!-- Texts -->
            <div class="mx-4">
              <h1 class="text-md text-black font-medium">{ $profile.displayName }</h1>
              <p class="text-sm text-gray-800">{ $profile.email }</p>
            </div>
          </div>

          <!-- Account Buttons -->
          <div style="overflow-y: auto;" class="w-full flex-grow relative">
            <div class="absolute w-full h-auto px-5">
              <button on:click={(e) => {
                dashpage = null;
                settings.changeSetting("minimalisticView", true);
              }} in:fade class="my-3 w-full relative flex justify-start items-center p-3 rounded-md border-1 border-gray-200">
                <!-- Icon -->
                <img style="height: 1.2rem; width: 1.2rem;" src="./icons/test-tube.png" alt="Icon">

                <!-- Texts -->
                <div class="ml-3 text-left">
                  <h1 class="text-sm text-black">Перейти в классический режим</h1>
                  <p class="text-gray-800 text-xs">Более простой и классический режим сайта, понятный всем пользователям.</p>
                </div>
              </button>

              <!-- Divider -->
              <Divider type="vertical" color="gray-200" margin="y-4" />

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
        { :else }
          <div class="w-full flex-grow relative flex flex-col items-center justify-center">
            <!-- Login Button -->
            <div class="w-full px-6 flex justify-center items-center">
              <Button on:click={(e) => {
                window.location.href = "https://authed.unfull.ml/callback?url=https://guides.odzi.dog/authorize/:token";
              }} classes="flex items-center py-2" textColor="white" hTextColor="white" backgroundColor="indigo-400" hBackgroundColor="indigo-500">
                <!-- Icon -->
                <svg style="height: 1.2rem; width: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>

                <!-- Texts -->
                <div class="ml-3 text-left">
                  <p class="text-md">Авторизоваться</p>
                  <p class="text-sm opacity-75">Используя сервисы unfull</p>
                </div>
              </Button>
            </div>

            <!-- Texts -->
            <div class="w-full px-4 mt-2 text-center">
              <h1 class="text-sm text-black font-medium opacity-75">Авторизовавшись с помощью <span class="border-b-1 border-dotted border-black">сервисов unfull</span> вы получите полный доступ к всем возможностям этого сайта! Вы получите намного больше функционала и сможете поделиться своим личным опытом с другими обитателями сайта!</h1>
            </div>
          </div>
        { /if }
      </div>
    { :else if dashpage == "user" }
      <!-- else content here -->
      <p>User Here</p>
    { /if }
  </div>
{ /if }