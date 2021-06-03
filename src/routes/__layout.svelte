<script>
  import "../app.css";
  import Header from "$lib/Header/index.svelte";
  import { domState } from "$lib/js/store";
</script>

<div class="relative min-h-screen md:flex">
  {#if $domState.login}
    <Header />
  {/if}
  <div class="bg-gray-200 h-screen flex-1 px-10 pt-32 relative">
    <slot />
  </div>
</div>
