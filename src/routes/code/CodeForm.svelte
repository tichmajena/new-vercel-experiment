<script>
  import { codeNotes } from "$lib/js/store";
  import { onMount } from "svelte";

  let code = false;
  export let step;
  export let note;
  console.log("Form is true");
  note.steps[step].code;

  let editor;
  let CodeMirror;
  let options = {
    lineNumbers: true,
    mode: "javascript",
    value: note.steps[step].code,
  };

  onMount(async () => {
    CodeMirror = (await import("@joshnuss/svelte-codemirror")).default;
    (await import("codemirror/mode/javascript/javascript")).default;
    console.log("CodeMirrored!");
  });
</script>

<div class="flex flex-col-reverse">
  <!-- <CodeMirror bind:editor class="editor" {options} /> -->
  <svelte:component this={CodeMirror} bind:editor {options} class="editor" />
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
    font-size: 1.5rem;
  }
</style>
