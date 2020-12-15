<script>
  // Importing modules
  import { goto } from "@sapper/app";
  import config from "../../../../config/default.json";

  import profile from "../../../../stores/profile.js";

  // Importing components
  import UserPopover from "../components/UserIcon.svelte";

  // Exporting some variables
  export let page;
</script>

<header style="z-index: 999; height: 8vh;" class="fixed inset-x-0 top-0 w-full bg-white flex justify-between items-center relative px-6">
  <slot name="left">
    <!-- Go Back Button -->
    <div style="z-index: 2;">
      <button on:click={(e) => {
        goto("/");
      }} class="transition duration-200 ease-in-out rounded-md p-2 text-black bg-white hover:bg-black hover:text-white">
        <svg style="width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
    </div>
  </slot>

  <div style="z-index: 1; height: 8vh;" class="absolute inset-0 w-full flex items-center justify-center mr-6 text-xs opacity-75">
    { #each config.layout.header.studio.items as item }
      <a class="mx-2 { item.page == page ? "border-b-1 border-pink-400" : "" }" href="{ item.href }">{ item.name }</a>
    { /each }
  </div>

  <!-- Account + Dogs Accounts -->
  <div style="z-index: 2;" class="hidden md:flex items-center">
    { #if $profile.id != 0 }
      <!-- Avatar -->
      <UserPopover />
    { :else }
      <button on:click={(e) => {
        goto("https://authed.unfull.ml/callback?url=https://guides.odzi.dog/authorize/:token");
      }} class="transition duration-300 ease-in-out py-1 px-4 rounded-md text-sm bg-white text-gray-800 hover:bg-gray-200 hover:text-black hover:shadow-md">
        Авторизоваться
      </button>
    { /if }
  </div>
</header>