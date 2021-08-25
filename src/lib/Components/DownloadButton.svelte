<script>
  import { saveInCache, deleteInCache } from "$lib/js/offline";
  import { createEventDispatcher } from "svelte";
  import { onMount } from "svelte";
  const dispatcher = createEventDispatcher();
  export let offline;
  export let slug;
  //export let list;

  // These functions do 2 things, they save/delete in cache and dispatch status to the post prop object
  async function downloadNote(note_slug = slug) {
    saveInCache(note_slug).then(() => dispatcher("saved"));
  }
  async function deleteNote() {
    deleteInCache(note_slug).then(() => dispatcher("deleted"));
  }

  // onMount(() => {
  //   list.forEach((note, i) => {
  //     downloadNote(`${i}-${note.id}`);
  //   });
  // });
</script>

{#if offline}
  <button on:click={deleteNote}>Remove download</button>
{:else}
  <button on:click={downloadNote}>Download post</button>
{/if}
