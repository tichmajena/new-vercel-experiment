<script>
  import { appNotes } from "$lib/js/store";

  function displayForm() {}
</script>

<style>
  .fab {
    position: fixed;
    right: 50px;
    bottom: 50px;
  }
</style>

<h1 class="text-2xl font-bold">App Notes</h1>

<main>
  <a href="/app/hello">
    <h3 class="mb-10">App Notes</h3>
  </a>
  <ul>
    {#each $appNotes as notes, index}
      <li>
        <div class="bg-" style="border-bottom: 2px solid gray">
          <h5>{notes.note.title}</h5>
          <span>
            <a href="/app/{index}">
              <button
                class="py-2 px-4 bg-pink-700 rounded-md text-white text-sm ">
                More
              </button>
            </a></span>
          <span>{notes.note.steps.length}
            Step{#if notes.note.steps.length > 1}s{/if}</span>
        </div>
      </li>
    {/each}
  </ul>
</main>
<div class="fab"><button on:click={displayForm}> + </button></div>
