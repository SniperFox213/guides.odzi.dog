<script>
  let hovered = false;

  import { fade } from 'svelte/transition';

  export let guide = {};
</script>

<div class="w-full md:w-1/3 lg:w-1/4 relative px-6 py-4">
  <div style="padding-top: 150%;" class="w-full relative">
    <div on:mouseover={() => hovered = true } on:mouseout={(e) => hovered = false } class="cursor-pointer transition duration-200 easy-in-out absolute inset-0 flex items-center justify-center w-full h-full rounded-lg bg-gray-900 shadow-md transform { hovered ? `scale-110 shadow-xl ${ guide.type == "answer" ? "bg-indigo-400" : guide.type == "article" ? "bg-yellow-400" : "bg-pink-400" } text-white` : "" }">

      <!-- Verified Badge + Setting button -->
      <div class="absolute inset-x-0 top-0 w-full flex items-center justify-between px-3 py-2">
        <!-- Settings Chevron -->
        <div class="flex items-center">
          <button class="transition duration-200 ease-in-out p-2 rounded-lg text-white hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-pink-400 hover:shadow-md">
            <!-- Icon -->
            <svg style="height: 0.8rem; width: 0.8rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>

          { #if hovered }
            <span transition:fade="{{ duration: 100 }}" class="ml-1 text-xs text-white">
              { #if guide.type == "answer" }
                Ответ
              { :else if guide.type == "article" }
                Статья
              { :else if guide.type == "guide" }
                Гайд
              { /if }
            </span>
          { /if }
        </div>
        
        { #if guide.verified }
          <div class="flex items-center">
            <span class="{ hovered ? "text-white" : "text-indigo-400" } transition duration-200 ease-in-out">
              <svg style="width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </span>

            <p class="text-xs text-white ml-1">Проверенно</p>
          </div>
        { /if }
      </div>
    
      <!-- Title + Description -->
      <div class="px-6">
        <!-- Author -->
        <div class="w-full flex items-center">
          <!-- Avatar -->
          <img style="height: 1.1rem; width: 1.1rem;" class="rounded-full" src="{ guide.author.avatar }" alt="">

          <!-- Author Name -->
          <p class="ml-1 text-xs text-white">{ guide.author.displayName }</p>
        </div>

        <!-- Heading + Description -->
        <h1 class="text-xl text-white">{ guide.title }</h1>
        <h2 class="text-sm text-gray-100">{ guide.description }</h2>
      </div>

      <!-- Guide's Views + Likes -->
      <div class="absolute inset-x-0 bottom-0 w-full px-3 py-2 flex items-center justify-center">
        <!-- Views -->
        <button class="{ hovered ? "text-white" : "text-gray-100" } mx-2 flex items-center">
          <!-- Icon -->
          <span>
            <svg style="height: 0.8rem; width: 0.8rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </span>

          <!-- Number -->
          <p class="ml-1 text-sm font-medium">{ guide.views }</p>
        </button>

        <!-- Likes -->
        <button class="{ hovered ? "text-white" : "text-gray-100" } mx-2 flex items-center">
          <!-- Icon -->
          <span>
            <svg style="height: 0.8rem; width: 0.8rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </span>

          <!-- Number -->
          <p class="ml-1 text-sm font-medium">{ guide.likes }</p>
        </button>
      </div>

    </div>
  </div>
</div>