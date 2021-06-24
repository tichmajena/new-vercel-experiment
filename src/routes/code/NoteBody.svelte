<script>
  import CodeContent from "./CodeContent.svelte";
  import CodeForm from "./CodeForm.svelte";
  import DescriptionForm from "./DescriptionForm.svelte";
  import DescriptionContent from "./DescriptionContent.svelte";
  import { domState, codeNotes } from "$lib/js/store";
  import Button from "$lib/Button/index.svelte";

  let idCount = 1;
  export let i = 0;
  export let ii = 0;

  function restState() {
    $codeNotes.forEach((note) => {
      note.edit = false;
      note.ready = false;
      $domState.edit = false;
      if (note.steps.length > 0) {
        note.steps.forEach((step) => {
          step.editDesc = false;
          step.editCode = false;
        });
      }
    });
  }
</script>

<div class="note-body-wrapper note-body-wrapper-{idCount}">
  <div class="note-body__desc note-body__desc-{idCount}">
    <div class="relative desc__form-div desc__form-div-{idCount}">
      {#if $codeNotes[i].steps[ii].editDesc}
        <DescriptionForm {i} {ii} />
        {#if $domState.edit}
          <div class="flex mt-2 mb-6">
            <Button
              on:click={() => {
                $codeNotes[i].steps[ii].editDesc = false;
                $domState.showFabs = true;
                $domState.update = true;
                $codeNotes[i].ready = true;
                $domState.edit = false;
              }}
              color="green">Update</Button
            >
            <Button
              on:click={() => {
                $codeNotes[i].steps[ii].editDesc = false;
                $domState.showFabs = true;
                $codeNotes[i].ready = true;
                $domState.edit = false;
              }}
              color="gray">Cancel</Button
            >
          </div>
        {/if}
      {/if}
    </div>
    <div class="relative desc__content-div desc__content-div-{idCount}">
      {#if !$codeNotes[i].steps[ii].editDesc}
        <DescriptionContent {i} {ii} />
      {/if}
      <div id="desc-form-btn" class="edit-btn">
        <button
          on:click={() => {
            restState();
            $codeNotes[i].steps[ii].editDesc = true;
            $domState.showFabs = false;
            $domState.edit = true;

            // $domState.update = true;
          }}
          class=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="note-body__snippet note-body__snippet-{idCount}">
    <div class="relative snippet__form-div snippet__form-div-{idCount}">
      {#if $codeNotes[i].steps[ii].editCode}
        <CodeForm {i} {ii} />
        {#if $domState.edit}
          <div class="flex mt-2 mb-6">
            <Button
              on:click={() => {
                $codeNotes[i].steps[ii].editCode = false;
                $domState.showFabs = true;
                $domState.update = true;
                $codeNotes[i].ready = true;
                $domState.edit = false;
              }}
              color="green">Update</Button
            >
            <Button
              on:click={() => {
                $codeNotes[i].steps[ii].editCode = false;
                $domState.showFabs = true;
                $codeNotes[i].ready = true;
                $domState.edit = false;
              }}
              color="gray">Cancel</Button
            >
          </div>
        {/if}
      {/if}
    </div>
    <div class="relative snippet__content-div snippet__content-div-{idCount}">
      {#if !$codeNotes[i].steps[ii].editCode && $codeNotes[i].steps[ii] !== ""}
        <CodeContent {i} {ii} />
      {/if}
      <div id="desc-form-btn" class="edit-btn">
        <button
          on:click={() => {
            restState();
            $codeNotes[i].steps[ii].editCode = true;
            $domState.showFabs = false;
            $domState.edit = true;
            // $domState.update = true;
          }}
          class=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
