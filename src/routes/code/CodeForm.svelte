<script>
  import { codeNotes } from "$lib/js/store";
  // import "codemirror/mode/javascript/javascript";
  // import CodeMirror from "@joshnuss/svelte-codemirror";

  let editor;
  export let step;
</script>

<div class="flex flex-col-reverse">
  <!-- <CodeMirror
    bind:editor
    options={{ lineNumbers: true, mode: "javascript", value: "const x = 42" }}
  /> -->

  <textarea
    class="snippet__code-input  "
    type="text"
    rows="3"
    id="snippet-field"
    bind:value={$codeNotes[0].steps[step].code}
  />
  <label class="" for="snippet-field">Code...</label>
</div>
