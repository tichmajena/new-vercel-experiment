<script>
  import { codeNotes } from "$lib/js/store";
  import { domState } from "$lib/js/store";

  export let i;

  function restState() {
    $codeNotes.forEach((note) => {
      note.edit = false;
      note.ready = false;
      if (note.steps.length > 0) {
        note.steps.forEach((step) => {
          step.editDesc = false;
          step.editCode = false;
        });
      }
    });
  }

  let showTitleForm = () => {
    restState();
    $codeNotes[i].edit = true;
    $domState.update = true;
    $domState.edit = true;
    $domState.showFabs = true;
  };
</script>

<div
  class="w-full bg-gray-400 p-4 md:top-14 top-24 fixed inset-x-0 md:pl-64 text-black z-10"
>
  <div id="title-form-btn" class="edit-btn">
    <button on:click={showTitleForm} class="">
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

  <h3 class="md:text-4xl text-xl ml-8 md:ml-10">{$codeNotes[i].title}</h3>
</div>
