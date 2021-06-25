<script>
  import "../app.css";
  import Header from "$lib/Header/index.svelte";
  import { domState } from "$lib/js/store";
</script>

<div class="bg-gray-200 relative min-h-screen md:flex md:fixed w-full pb-36 ">
  <Header />

  <div class="h-screen w-full overflow-auto flex-1 px-10 my-32 relative">
    <slot />
  </div>
</div>
