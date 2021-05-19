<script>
  import "../app.css";
  import Header from "$lib/Header/index.svelte";
  import { domState } from "$lib/js/store";
</script>

<div class="relative min-h-screen md:flex">
  {#if $domState.login}
    <Header />
  {/if}
  <div class="bg-gray-200 flex-1 p-10 relative">
    <slot />
  </div>
</div>
