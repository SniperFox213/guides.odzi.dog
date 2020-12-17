<script>
  // Importing modules 
  import profile from "../../../../stores/profile.js";

  // Importing components
  import IconButton from "../../../Controls/IconButton/index.svelte";

  let isOpen = false;
</script>

{ #if $profile.id != 0 }
  <button class="flex justify-center items-center">
    <img class="w-8 h-8 rounded-full border-1 border-solid border-gray-300" src="{ $profile.avatar }" alt="">
  </button>
{ :else }
  <IconButton on:click={(e) => {
    window.location.href = "https://authed.unfull.ml/callback?url=https://guides.odzi.dog/authorize/:token";
  }}>
    <svg style="height: 1.2rem; width: 1.2rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
  </IconButton>
{ /if }