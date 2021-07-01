<script>
  import { domState, codeNotes } from "$lib/js/store";

  export let i = 0;
  $: activeIndex = 0;

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

  function addDescription(params) {
    restState();

    let newStep = {
      subtitle: "",
      desc: "",
      code: "",
      codeDOM: "",
      editDesc: true,
      editCode: false,
    };

    $codeNotes[i].steps = [...$codeNotes[i].steps, newStep];
    activeIndex = $codeNotes[i].steps.length - 1;
    $domState.update = true;
  }

  function addCode() {
    restState();
    $codeNotes[i].steps[activeIndex].editCode = true;
    $domState.update = true;
  }

  function saveNote() {
    restState();
    $codeNotes[i].steps[activeIndex].editCode = false;
    $codeNotes[i].ready = true;
    $domState.update = true;
  }
</script>

{#if $domState.showFabs}
  <div class="fab">
    {#if $codeNotes[i].ready}
      <div id="subject-btn">
        <button
          class="text-white bg-purple-700 rounded-full w-14 h-14 grid place-items-center"
          on:click={addDescription}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    {/if}
    {#if $codeNotes[i].steps.length > 0}
      {#if $codeNotes[i].steps[activeIndex].editDesc}
        <div id="code-btn">
          <button
            class="text-white bg-purple-700 rounded-full w-14 h-14 grid place-items-center"
            on:click={addCode}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </button>
        </div>
      {/if}

      {#if $codeNotes[i].steps[activeIndex].editCode}
        <div id="save-btn">
          <button
            class="text-white bg-purple-700 rounded-full w-14 h-14 grid place-items-center"
            on:click={saveNote}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
          </button>
        </div>
      {/if}
    {/if}
  </div>
{/if}
