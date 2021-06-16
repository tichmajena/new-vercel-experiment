<script>
  import { codeNotes } from "$lib/js/store";
  import { domState } from "$lib/js/store";
  import Button from "$lib/Button/index.svelte";
  let loading = false;

  export let index;
  export let note;

  let showTitleContent = () => {
    $codeNotes[index].edit = false;
    // $codeNotes[index].ready = true;
  };
</script>

<div class="flex flex-col">
  <label class="" for="input-title">Title...</label>

  <input
    class="title__input "
    type="text"
    id="input-title"
    bind:value={note.title}
  />
</div>

<Button on:click={showTitleContent} {loading} color="green">Save</Button>
