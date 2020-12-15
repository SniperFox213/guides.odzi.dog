<script>
	// Let's now import our styles component
	import styles from "../components/styles.svelte";

	import { fade } from "svelte/transition";
  import tilt from "vanilla-tilt";

	// Importing some components and then
	// performing some needed actions
	import profile from "../stores/profile.js";

	import { goto } from "@sapper/app";

	import Cookie from "cookie-universal";
	const cookies = Cookie();

	import { onMount } from "svelte";

	onMount(() => {
		setTimeout(() => {
			// And now let's check our user's account
			if (!cookies.get("token")) {
				profile.forceProfile({ id: 0 });
			} else {
				// Let's get our user's profile
				profile.loadProfile(cookies.get("token"));
			};
		}, 250);
	});
</script>

<!-- Importing some fonts -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Caveat&family=Manrope:wght@300;400;500;600&display=swap');

	#logo {
		animation: pulse 2s infinite ease-in-out;
	}

	@keyframes pulse {
		0%   { opacity: 100% }
		50%  { opacity: 50% }
		100% { opacity: 100% }
	}
</style>

<svelte:head>
	<title>odzi.guides - Помощник и справочник по правильному отношению с собаками и про их уход</title>
</svelte:head>

{ #if $profile.id == null }
	<div transition:fade style="z-index: 2;" class="fixed inset-0 w-full h-full bg-white flex justify-center items-center">
		<!-- Logotype -->
		<img id="logo" style="height: 2rem;" src="./logotype/black-full.svg" alt="odzi.network logotype">
	</div>
{ :else }
	<main style="z-index: 1; font-family: 'Manrope', sans-serif;" class="relative">
		<slot></slot>
	</main>
{ /if }