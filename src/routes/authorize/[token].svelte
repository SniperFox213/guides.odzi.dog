<script>
  // Importing modules
  import { fade } from "svelte/transition";
  import { goto } from "@sapper/app";
  import moment from "moment";

  import Cookie from "cookie-universal";
  const cookies = Cookie();

  import { onMount } from "svelte";
  import profile from "../../stores/profile.js";

  import { stores } from "@sapper/app";
  const { page } = stores();

  onMount(() => {
    // Now let's try to load this user's
    // information using Profile Store
    profile.loadProfile($page.params.token)
    .then(() => {
      // And now we need to save this user's
      // token as cookie and redirect
      // user to main page.
      cookies.set('token', $page.params.token, { path: "/", expires: moment().add('1', 'year').toDate() });

      goto('/');
    }).catch((error) => {
      // Error
    });
  });
</script>

<main style="z-index: 1001;" transition:fade class="w-full h-screen bg-white flex flex-col items-center justify-center">
  <!-- Logotype -->
  <img style="height: 2rem;" src="./logotype/black-full.svg" alt="odzi.network logotype">

  <!-- Text -->
  <h1 class="text-sm text-black font-medium opacity-75 mt-4">Обрабатываем...</h1>
</main>