<script>
  // Importing modules
  import Cookie from "cookie-universal";
  const cookies = Cookie();
  
  import profile from "../../../../stores/profile.js";
  import Popover from "svelte-popover";

  import { fade, slide } from "svelte/transition";

  import { goto } from "@sapper/app";

  // Importing components


  let currentPet = null;
  let isOpen = false;
</script>

<!-- Popover Itself -->
<Popover arrow={ false } placement="bottom-end" bind:open={ isOpen } overlayColor="rgba(0,0,0,0)">
  <button slot="target">
    <button class="w-8 h-8 border-1 border-solid border-pink-400 rounded-full flex items-center justify-center bg-white">
      <img style="height: 1.1rem; width: 1.1rem;" src="./icons/dog.png" alt="Dog Icon">
    </button>
  </button>

  <div in:fade style="min-width: 25vw;" slot="content" class="py-4">
    { #if currentPet != null }
      <div in:slide class="w-full h-full rounded-md bg-white shadow-lg">
        <!-- Title -->
        <div class="w-full flex justify-center items-center pt-4 relative">
          <!-- Back Button -->
          <button on:click={(e) => currentPet = null} class="absolute p-2 left-0">
            <svg style="height: 1.2rem; width: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <!-- Title + Avatar -->
          <div style="background-image: url('{ currentPet.avatar }'); background-repeat: no-repeat; background-position: center; background-size: cover;" class="w-6 h-6 rounded-full"></div>
          <h1 class="ml-1 text-md text-black font-medium">{ currentPet.name }</h1>
        </div>

        <!-- Current Pet's Settings -->
      </div>
    { :else }
      <div in:slide class="w-full h-full rounded-md bg-white shadow-lg">
        <!-- Title "+ text" -->
        <div class="px-6 text-center pt-4">
          <h1 class="text-md text-black font-medium">Ваши питомцы</h1>
          <p class="text-sm text-gray-800">Список ваших питомцев, приправленный небольшим количеством информации о них.</p>
        </div>

        <!-- Dog List -->
        { #if $profile.pets.length > 0 }
          <div style="height: 40vh; overflow: hidden; overflow-y: auto;" class="w-full relative">
            <div class="absolute w-full h-full px-4 pt-6">
              { #each $profile.pets as pet }
                <div on:click={(e) => {
                  currentPet = pet;
                }} class="cursor-pointer w-full flex justify-between items-center px-4 py-2 rounded-md border-1 border-gray-200">
                  <div class="flex items-center">
                    <!-- Avatar -->
                    <div style="background-image: url('{ pet.avatar }'); background-repeat: no-repeat; background-position: center; background-size: cover;" class="w-10 h-10 rounded-full"></div>

                    <!-- Texts -->
                    <div class="ml-2">
                      <h2 class="text-md text-black font-medium">{ pet.name }</h2>
                      <p class="text-sm text-gray-800">{ pet.breed }</p>
                    </div>
                  </div>

                  <!-- Buttons -->
                  <div class="flex float-right items-center">
                    <!-- Chevron Down -->
                    <button class="ml-4">
                      <svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                  </div>
                </div>
              { /each }
            </div>
          </div>
        { :else }
          <div class="w-full flex flex-col justify-center items-center py-10">
            <img style="width: 2.5rem; height: 2.5rem;" src="./icons/downcast-face-with-sweat.png" alt="Sad Face">

            <!-- Texts -->
            <div class="text-center mt-2 w-2/3">
              <h2 class="text-md text-black font-medium">Тут пусто</h2>
              <p class="text-sm text-gray-800">Вы не добавили своего питомца. Сделать это можно нажав на кнопку ниже!</p>
            </div>

            <!-- Button -->
            <button class="transition duration-200 ease-in-out transform w-2/3 mt-6 flex justify-center items-center text-gray-800 px-4 py-2 rounded-sm border-1 border-gray-300 hover:scale-105 hover:bg-black hover:text-white hover:border-black">
              <!-- Icon -->
              <svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>

              <!-- Text -->
              <p class="text-sm ml-2">Добавить питомца</p>
            </button>
          </div>
        { /if }
      </div>
    { /if }
  </div>
</Popover> 