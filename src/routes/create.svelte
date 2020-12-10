<script>
  // Importing modules
  import profile from "../stores/profile.js";
  import { onMount } from "svelte";

  import { goto } from "@sapper/app";

  // Importing components
  import Header from "../components/Layout/Header/index.svelte";

  // Let's now check if we have any logged in
  // user.
  onMount(() => {
    if ($profile.id == 0) {
      goto('/');
    };
  });
</script>

<!-- Main Application Window -->
<main class="w-full h-full relative">
  <!-- Header -->
  <Header />

  <!-- Editor Container -->
  <div class="h-screen w-full flex flex-col justify-center items-center pb-8">
    <!-- Title -->
    <h1 class="text-xl font-bold text-black">Выберите тип поста</h1>
    <p class="text-base text-gray-800 w-1/3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eum porro veritatis cupiditate aspernatur praesentium. Nesciunt distinctio sed odio non numquam corporis eum ratione cum.</p>

    <!-- All Types -->
    <div class="w-full flex flex-wrap pt-6 px-6 md:px-12 lg:px-24">

      <!-- Card -->
      <div class="w-1/3 relative px-6 py-3">
        <div class="pt-50per w-full relative">
          <div class="absolute cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 hover:bg-gray-900 hover:text-white text-white flex justify-center items-center hover:shadow-md inset-0 w-full h-full rounded-md bg-yellow-400">
            <!-- Icon -->
            <img style="height: 2rem; width: 2rem;" src="./icons/high-voltage.png" alt="">

            <!-- Texts -->
            <div class="ml-2 w-2/3">
              <h2 class="text-md font-medium">Статья</h2>
              <p class="text-sm text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, velit? Enim excepturi reiciendis iste optio?</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/3 relative px-6 py-3">
        <div class="pt-50per w-full relative">
          <div class="absolute cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 hover:bg-gray-900 hover:text-white text-white flex justify-center items-center hover:shadow-md inset-0 w-full h-full rounded-md bg-pink-400">
            <!-- Icon -->
            <img style="height: 2rem; width: 2rem;" src="./icons/high-voltage.png" alt="">

            <!-- Texts -->
            <div class="ml-2 w-2/3">
              <h2 class="text-md font-medium">Гайд</h2>
              <p class="text-sm text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, velit? Enim excepturi reiciendis iste optio?</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/3 relative px-6 py-3">
        <div class="pt-50per w-full relative">
          <div class="absolute cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 hover:bg-gray-900 hover:text-white text-white flex justify-center items-center hover:shadow-md inset-0 w-full h-full rounded-md bg-indigo-400">
            <!-- Icon -->
            <img style="height: 2rem; width: 2rem;" src="./icons/high-voltage.png" alt="">

            <!-- Texts -->
            <div class="ml-2 w-2/3">
              <h2 class="text-md font-medium">Ответ</h2>
              <p class="text-sm text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, velit? Enim excepturi reiciendis iste optio?</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Dots -->
  <div class="absolute inset-x-0 bottom-0 w-full pb-6 flex justify-center items-center">
    <span class="cursor-not-allowed w-4 h-4 rounded-full bg-black mx-3"></span>
    <span class="cursor-pointer w-3 h-3 rounded-full border-2 border-black mx-3"></span>
    <span class="cursor-pointer w-3 h-3 rounded-full border-2 border-black mx-3"></span>
  </div>
</main>