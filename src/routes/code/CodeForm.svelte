<script>
  import { codeNotes } from "$lib/js/store";
  import { onMount } from "svelte";

  let code = false;

  let editor;
  let CodeMirror;
  let options = {
    lineNumbers: true,
    mode: "javascript",
    value: "const x = 42",
  };
  const sleep = (ms) => new Promise((f) => setTimeout(f, ms));

  onMount(async () => {
    await sleep(1000); // simulate network delay
    //Thing = (await import("./Thing.svelte")).default;
    //import 'codemirror/mode/javascript/javascript'
    (await import("codemirror/mode/javascript/javascript")).default;

    //import CodeMirror from '@joshnuss/svelte-codemirror'
    CodeMirror = (await import("@joshnuss/svelte-codemirror")).default;

    // CodeMirror = (await import("codemirror")).default;
  });

  export let step;
</script>

<div class="flex flex-col-reverse">
  <!-- <CodeMirror bind:editor class="editor" {options} /> -->
  <svelte:component
    this={CodeMirror}
    bind:editor
    options={{ lineNumbers: true, mode: "javascript", value: "const x = 42" }}
    class="editor"
  />
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
