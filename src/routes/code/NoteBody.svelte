<script>
  import CodeContent from "./CodeContent.svelte";
  import CodeForm from "./CodeForm.svelte";
  import DescriptionForm from "./DescriptionForm.svelte";
  import DescriptionContent from "./DescriptionContent.svelte";
  import { domState, codeNotes } from "$lib/js/store";
  let idCount = 1;
  export let step;
</script>

<div class="note-body-wrapper note-body-wrapper-{idCount}">
  <div class="note-body__desc note-body__desc-{idCount}">
    <div class="desc__form-div desc__form-div-{idCount}">
      {#if $codeNotes[0].steps[step].showDForm}
        <DescriptionForm {step} />
      {/if}
    </div>
    <div class="desc__content-div desc__content-div-{idCount}">
      {#if $codeNotes[0].steps[step].showDContent}
        <DescriptionContent {step} />
      {/if}
    </div>
  </div>
  <div class="note-body__snippet note-body__snippet-{idCount}">
    <div class="snippet__form-div snippet__form-div-{idCount}">
      {#if $codeNotes[0].steps[step].showCForm}
        <CodeForm {step} />
      {/if}
    </div>
    <div class="snippet__content-div snippet__content-div-{idCount}">
      {#if $codeNotes[0].steps[step].showCContent}
        <CodeContent {step} />
      {/if}
    </div>
  </div>
</div>
