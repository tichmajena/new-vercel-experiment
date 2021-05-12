<script>
  import { codeNotes } from "$lib/js/store";
  export let step;
</script>

<div class="flex flex-col-reverse">
  <textarea
    class="snippet__code-input  "
    type="text"
    rows="3"
    id="snippet-field"
    bind:value={$codeNotes[0].steps[step].code}
  />
  <label class="" for="snippet-field">Code...</label>
</div>
