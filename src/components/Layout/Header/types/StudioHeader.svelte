<script>
  // Importing modules
  import { goto } from "@sapper/app";
  import config from "../../../../config/default.json";

  import profile from "../../../../stores/profile.js";

  // Importing components
  import UserPopover from "../components/UserPopover.svelte";

  // Exporting some variables
  export let page;
</script>

<!-- Logotype -->
<slot name="left">
  <div class="w-1/4">
    <img class="cursor-pointer" on:click={(e) => {
      goto("/");
    }} style="height: 2rem;" src="./logotype/odzi-guides-black.svg" alt="odzi.guides logotype">
  </div>  
</slot>

<!-- Account + Dogs Accounts -->
<div class="hidden md:flex items-center justify-end w-2/4">
  <div class="flex mr-6 text-xs opacity-75">
    { #each config.layout.header.default.items as item }
      <a class="mx-2 { item.page == page ? "border-b-1 border-pink-400" : "" }" href="{ item.href }">{ item.name }</a>
    { /each }
  </div>

  { #if $profile.id != 0 }
    <!-- Dog Accounts -->
    <button class="w-8 h-8 border-1 border-solid border-pink-400 rounded-full flex items-center justify-center bg-white">
      <img style="height: 1.1rem; width: 1.1rem;" src="./icons/dog.png" alt="Dog Icon">
    </button>

    <!-- Divider -->
    <div style="height: 1.6rem; width: 1px;" class="rounded-lg bg-gray-600 mx-2"></div>

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