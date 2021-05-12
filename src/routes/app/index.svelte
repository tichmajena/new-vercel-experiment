<script>
  import { appNotes } from "$lib/js/store";

  function displayForm() {}
</script>

<h1 class="text-2xl font-bold ">App Notes</h1>

<main>
  <a href="/app/hello">
    <h3 class="mb-10">App Notes</h3>
  </a>
  <ul>
    {#each $appNotes as notes}
      <li>
        <div style="border-bottom: 2px solid gray">
          <h5>{notes.appName}</h5>
          <span> -> </span>
          <span
            >{notes.steps.length} Step{#if notes.steps.length > 1}s{/if}</span
          >
        </div>
      </li>
    {/each}
  </ul>
</main>
<div class="fab">
  <button on:click={displayForm}> + </button>
</div>

<style>
  .fab {
    position: fixed;
    right: 50px;
    bottom: 50px;
  }
</style>
