<script>
  import { codeNotes } from "$lib/js/store";
  export let index;
  import { domState } from "$lib/js/store";

  let showTitleContent = () => {
    $domState.showTitleForm = false;
    $domState.showTitleContent = true;
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

<button on:click={showTitleContent}>Save</button>
