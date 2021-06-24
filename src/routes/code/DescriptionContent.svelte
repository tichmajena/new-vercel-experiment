<script>
  import { codeNotes, domState } from "$lib/js/store";
  export let i;
  export let ii;
</script>

<div>
  <h3 class="text-2xl mb-3">{$codeNotes[i].steps[ii].subtitle}</h3>
  <p class="text-lg mb-3">{$codeNotes[i].steps[ii].desc}</p>
</div>
