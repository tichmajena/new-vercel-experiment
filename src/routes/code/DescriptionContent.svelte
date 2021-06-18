<script>
  import { codeNotes, domState } from "$lib/js/store";
  export let step;
  export let note;
  let showDescForm = () => {
    $domState.activeIndex = step;
    note.steps[step].showDForm = true;
    note.steps[step].showDContent = false;
  };
  let notess = $codeNotes;
</script>

<div>
  <h3 class="text-2xl mb-3">{note.steps[step].subtitle}</h3>
  <p class="text-lg mb-3">{note.steps[step].desc}</p>
</div>
