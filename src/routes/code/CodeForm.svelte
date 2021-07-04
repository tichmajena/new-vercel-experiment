<script>
  import { codeNotes, domState, languages } from "$lib/js/store";
  import { onMount } from "svelte";

  let code = false;
  export let i;
  export let ii;

  let editor;
  let CodeMirror;
  $: options = {};
  let gondo = 4;

  onMount(async () => {
    CodeMirror = (await import("@joshnuss/svelte-codemirror")).default;
    (await import("codemirror/mode/javascript/javascript")).default;
    options = {
      mode: "javascript",
      lineNumbers: true,
      theme: "monokai",
      value: $codeNotes[i].steps[ii].code,
    };
  });
</script>

<form>
  Language:
  <select bind:value={$codeNotes[i].steps[ii].codeLang}>
    {#each $languages as language}
      <option value={language}>
        {language}
      </option>
    {/each}
  </select>
</form>

<div class="flex flex-col-reverse">
  <!-- <CodeMirror bind:editor class="editor" {options} /> -->
  {#key gondo}
    <svelte:component
      this={CodeMirror}
      bind:editor
      {options}
      bind:value={$codeNotes[i].steps[ii].code}
      class="editor"
    />
  {/key}
  <!-- <textarea
    class="snippet__code-input  "
    type="text"
    rows="3"
    id="snippet-field"
    bind:value={$codeNotes[0].steps[step].code}
  /> -->
  <label class="" for="snippet-field">Code...</label>
</div>

<style>
  :global(.editor) {
    font-size: 1.2rem;
  }
</style>
