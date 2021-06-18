<script>
  import { codeNotes, domState } from "$lib/js/store";
  import { onMount } from "svelte";

  let code = false;
  export let step;
  export let note;
  console.log("Form is true");
  note.steps[step].code;

  let editor;
  let CodeMirror;
  s: options = {};
  let gondo = 4;
  setInterval(() => {
    gondo = 5;
  }, 5000);

  onMount(async () => {
    CodeMirror = (await import("@joshnuss/svelte-codemirror")).default;
    (await import("codemirror/mode/javascript/javascript")).default;
    //gondo = (await import("codemirror/mode/javascript/javascript")).default;
    // console.log(gondo);
    console.log("CodeMirrored!");
    options = {
      mode: "javascript",
      lineNumbers: true,
      theme: "monokai",
      value: note.steps[step].code,
    };
  });
</script>

<div class="flex flex-col-reverse">
  <!-- <CodeMirror bind:editor class="editor" {options} /> -->
  {#key gondo}
    <svelte:component
      this={CodeMirror}
      bind:editor
      {options}
      bind:value={$codeNotes[$domState.pageIndex].steps[step].code}
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
