<script context="module">
  export const prerender = true;
</script>

<script>
  import Counter from "$lib/Counter/index.svelte";
  import { scale, fade } from "svelte/transition";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div in:fade class="grid grid-rows-2 grid-flow-col gap-4">
  <a href="/app" class="text-blue-100"
    ><div class="p-10 bg-blue-700 text-blue-100 hover:bg-blue-600 text-center">
      App Notes
    </div></a
  >
  <a href="/code" class="text-blue-100"
    ><div class=" p-10 bg-blue-700 text-blue-100 hover:bg-blue-600 text-center">
      Code Notes
    </div></a
  >
  <a href="/contacts" class="text-blue-100"
    ><div class="p-10 bg-blue-700 text-blue-100 hover:bg-blue-600 text-center">
      Contacts
    </div></a
  >
  <a href="/notes" class="text-blue-100"
    ><div class="p-10 bg-blue-700 text-blue-100 hover:bg-blue-600 text-center">
      Notes
    </div></a
  >
</div>
