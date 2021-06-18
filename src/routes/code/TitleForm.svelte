<script>
  import { codeNotes } from "$lib/js/store";
  import { domState } from "$lib/js/store";
  import Button from "$lib/Button/index.svelte";
  let loading = false;

  export let index;
  export let note;

  function restState() {
    $codeNotes.forEach((note) => {
      note.edit = false;
      note.ready = false;
      if (note.steps.length > 0) {
        note.steps.forEach((step) => {
          step.editDesc = false;
          step.editCode = false;
        });
      }
    });
  }
  let showTitleContent = () => {
    console.log(index);
    restState();
    $codeNotes[index].edit = false;
    $codeNotes[index].ready = true;
  };
</script>

<div class="flex flex-col">
  <label class="" for="input-title">Title...</label>

  <input
    class="title__input "
    type="text"
    id="input-title"
    bind:value={$codeNotes[index].title}
  />
</div>
{#if $domState.edit}
  <div class="mt-2 mb-6">
    <Button on:click={showTitleContent} {loading} color="green">Update</Button>
  </div>
{/if}
