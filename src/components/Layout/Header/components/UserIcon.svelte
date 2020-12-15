<script>
  // Importing modules
  import Cookie from "cookie-universal";
  const cookies = Cookie();
  
  import profile from "../../../../stores/profile.js";
  import Popover from "svelte-popover";

  import { fade, slide } from "svelte/transition";

  import { goto } from "@sapper/app";

  // Importing components


  let isOpen = false;
</script>

<!-- Popover Itself -->
<Popover arrow={ false } placement="bottom-end" bind:open={ isOpen } overlayColor="rgba(0,0,0,0)">
  <button slot="target">
    <button class="flex justify-center items-center">
      <img class="w-8 h-8 rounded-full border-1 border-solid border-gray-300" src="{ $profile.avatar }" alt="">
    </button>
  </button>

  <div in:fade style="min-width: 20vw;" slot="content" class="py-4">
    <div in:slide class="w-full h-full rounded-md bg-white shadow-lg">
      <!-- User Info -->
      <div class="w-full flex justify-center items-center px-3 pt-3">
        <!-- Avatar -->
        <img class="w-12 h-12 rounded-full border-1 border-solid border-gray-300" src="{ $profile.avatar }" alt="">

        <!-- Texts -->
        <div class="ml-2">
          <h2 class="text-md text-black">{ $profile.displayName }</h2>
          <p class="text-sm text-gray-800">{ $profile.email }</p>
        </div>
      </div>

      <!-- Links -->
      <div class="w-full mt-4">
        <button on:click={(e) => {
          goto("/account");
        }} class="w-full flex items-center text-gray-800 hover:bg-gray-200 py-2 px-6 rounded-b-md">
          <!-- Icon -->
          <svg style="width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>

          <!-- Text -->
          <p class="text-sm ml-2">Настройки</p>
        </button>

        <button on:click={(e) => {
            goto("/courses");
          }} class="w-full flex items-center text-gray-800 hover:bg-gray-200 py-2 px-6 rounded-b-md">
          <!-- Icon -->
          <svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>

          <!-- Text -->
          <p class="text-sm ml-2">Мои курсы</p>
        </button>

        <button on:click={(e) => {
          goto("/pets");
        }} class="w-full flex items-center text-gray-800 hover:bg-gray-200 py-2 px-6 rounded-b-md">
          <!-- Icon -->
          <img style="height: 1rem; width: 1rem;" src="./icons/dog-collar-2.png" alt="">

          <!-- Text -->
          <p class="text-sm ml-2">Мои питомцы</p>
        </button>

        <button on:click={(e) => {
          goto("/studio");
        }} class="w-full flex items-center text-gray-800 hover:bg-gray-200 py-2 px-6 rounded-b-md">
          <!-- Icon -->
          <svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>

          <!-- Text -->
          <p class="text-sm ml-2">Страница Автора</p>
        </button>

        <button on:click={(e) => {
          cookies.remove("token");
          isOpen = false;
          
          profile.forceProfile({ id: 0 });
        }} class="w-full flex items-center text-gray-800 hover:bg-gray-200 py-2 px-6 rounded-b-md">
          <!-- Icon -->
          <svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>

          <!-- Text -->
          <p class="text-sm ml-2">Выйти</p>
        </button>

        <!-- other odzi.dog services -->
        <!-- Divider -->
        <div class="w-full px-6 py-2">
          <div style="height: 1px; width: 100%" class="bg-gray-300"></div>
        </div>

        <button on:click={(e) => {
          window.location.href = "https://learn.odzi.dog";
        }} class="w-full flex items-center text-gray-800 hover:bg-gray-200 py-2 px-6 rounded-b-md relative">
          <!-- Text -->
          <p class="text-sm ml-2">Обучающая Платформа</p>
        </button>

        <button on:click={(e) => {
          window.location.href = "https://market.odzi.dog";
        }} class="w-full flex items-center text-gray-800 hover:bg-gray-200 py-2 px-6 rounded-b-md relative">
          <!-- Text -->
          <p class="text-sm ml-2">Магазин для Собак</p>
        </button>

        <button on:click={(e) => {
          window.location.href = "https://health.odzi.dog";
        }} class="w-full flex items-center text-gray-800 hover:bg-gray-200 py-2 px-6 rounded-b-md relative">
          <!-- Text -->
          <p class="text-sm ml-2">Онлайн-Клиника</p>
        </button>

        <button class="cursor-not-allowed w-full flex items-center text-gray-800 hover:bg-gray-200 py-2 px-6 rounded-b-md relative">
          <!-- Text -->
          <p class="text-sm ml-2">Справочник по Собакам</p>
        </button>
      </div>
    </div>
  </div>
</Popover> 