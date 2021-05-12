<script>
  import "../app.css";
  import Header from "$lib/Header/index.svelte";
</script>

<div class="relative min-h-screen md:flex">
  <Header />
  <div class="bg-gray-200 flex-1 p-10 relative">
    <slot />
  </div>
</div>
