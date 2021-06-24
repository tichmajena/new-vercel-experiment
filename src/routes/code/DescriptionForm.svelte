<script>
  import { codeNotes, domState } from "$lib/js/store";
  export let i;
  export let ii;
</script>

<div class="flex flex-col-reverse mb-3">
  <input
    class="desc__subtitle-input "
    type="text"
    id="subtitle-field"
    bind:value={$codeNotes[i].steps[ii].subtitle}
  />
  <label class="" for="subtitle-field">Subtitle...</label>
</div>

<div class="flex flex-col-reverse mb-3">
  <textarea
    class="desc__content-input "
    type="text"
    rows="3"
    id="content-field"
    bind:value={$codeNotes[i].steps[ii].desc}
  />
  <label class="" for="content-field">Content...</label>
</div>

<div class="flex flex-col-reverse mb-3">
  <input
    class="desc__subtitle-input "
    type="file"
    id="image-field"
    multiple
    bind:value={$codeNotes[i].steps[ii].subtitle}
  />
  <label class="" for="image-field">Upload Images...</label>
</div>
