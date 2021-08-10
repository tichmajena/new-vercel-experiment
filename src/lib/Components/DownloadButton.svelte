<script>
  import { saveInCache, deleteInCache } from "$lib/js/offline";
  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();
  export let offline;
  export let slug;

  // These functions do 2 things, they save/delete in cache and dispatch status to the post prop object
  async function downloadNote() {
    saveInCache(slug).then(() => dispatcher("saved"));
  }
  async function deleteNote() {
    deleteInCache(slug).then(() => dispatcher("deleted"));
  }
</script>

{#if offline}
  <button on:click={deleteNote}>Remove download</button>
{:else}
  <button on:click={downloadNote}>Download post</button>
{/if}
